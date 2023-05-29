import Web3 from "web3"
import type { Contract } from "web3-eth-contract"
import type { AbiItem } from "web3-utils"
import type { IThePoolzInterface } from "../types/IThePoolzInterface"
import { defaultChainId } from "../constants"
import ERC20 from "../abi/ERC20.json"
import CHAINS from "../constants/chains.json"

class ThePoolz implements IThePoolzInterface {
  public account: IThePoolzInterface["account"]
  public chainId: IThePoolzInterface["chainId"] = defaultChainId
  public web3: IThePoolzInterface["web3"]
  public balance: IThePoolzInterface["balance"] = "0"
  #provider: typeof Web3.givenProvider
  #contracts = new Map<string, Contract>()
  #isTrustWallet = false

  constructor(provider: typeof Web3.givenProvider) {
    this.#provider = provider
    this.web3 = new Web3(provider)
    this.#isTrustWallet = !!provider?.isTrustWallet
  }
  async init() {
    await this.initTrust()
    await this.initChainId()
    await this.initAccount()
    await this.getBalance()
    // await this.initContracts()
  }
  private async initTrust() {
    if (!this.web3.currentProvider || !this.#isTrustWallet) return
    // @ts-ignore
    await this.web3.currentProvider.request({ method: "eth_requestAccounts" })
  }
  private async initChainId() {
    if (!this.#provider) return
    this.chainId = await this.web3.eth.getChainId()
  }

  private async initAccount() {
    if (!this.#provider) return
    const accounts = await this.web3.eth.getAccounts()
    if (accounts.length) this.account = accounts[0]
  }

  private async getBalance() {
    if (!this.#provider || !this.account) return
    this.balance = await this.web3.eth.getBalance(this.account)
  }

  // Init the Poolz contracts
  // private async initContracts() {}

  async getChaincoinInfo(chainId?: typeof this.chainId) {
    if (!chainId) chainId = this.chainId
    return CHAINS.find((chain) => chain.chainId === chainId)
  }

  async ERC20(token: string) {
    const cache = this.#contracts.get(token)
    if (cache) return cache

    const contract = new this.web3.eth.Contract(ERC20.abi as AbiItem[], token)
    this.#contracts.set(token, contract)
    return contract
  }

  async ERC20Balance(token: string, account: string) {
    const ERC20Contract = await this.ERC20(token)
    return (await ERC20Contract.methods.balanceOf(account).call()) as string
  }

  async ERC20Info(token: string) {
    const ERC20Contract = await this.ERC20(token)

    const data = await Promise.all([
      ERC20Contract.methods.name().call(),
      ERC20Contract.methods.symbol().call(),
      ERC20Contract.methods.decimals().call()
    ])

    return { decimals: parseInt(data[2]), symbol: data[1] as string | undefined, name: data[0] as string | undefined }
  }

  async Contract(name: "ERC20", address?: string) {
    const collectionName = name + address ?? ""
    if (this.#contracts.has(collectionName)) return this.#contracts.get(collectionName)
    if (name === "ERC20") {
      const contract = new this.web3.eth.Contract(ERC20.abi as AbiItem[], address)
      this.#contracts.set(collectionName, contract)
      return contract
    }
  }
}

export default ThePoolz
