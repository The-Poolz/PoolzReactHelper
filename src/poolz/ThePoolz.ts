import Web3 from "web3"
import { Contract } from "web3-eth-contract"
import { AbiItem } from "web3-utils"
import { IThePoolzInterface } from "../types/IThePoolzInterface"
import { defaultChainId } from "../constants"
import ERC20 from "../abi/ERC20.json"
import CHAINS from "../constants/chains.json"

class ThePoolz implements IThePoolzInterface {
  public account: IThePoolzInterface["account"]
  public chainId: IThePoolzInterface["chainId"] = defaultChainId
  public web3: IThePoolzInterface["web3"]
  public balance: IThePoolzInterface["balance"] = "0"
  #contracts = new Map()

  constructor(provider?: typeof Web3.givenProvider) {
    if (provider) this.web3 = new Web3(provider)
  }
  async init() {
    await this.initChainId()
    await this.initAccount()
    await this.getBalance()
    // await this.initContracts()
  }
  private async initChainId() {
    if (!this.web3) return
    try {
      this.chainId = await this.web3.eth.getChainId()
    } catch (error) {}
  }

  private async initAccount() {
    if (!this.web3) return
    try {
      const accounts = await this.web3.eth.getAccounts()
      if (accounts.length) this.account = accounts[0]
    } catch (error) {}
  }

  private async getBalance() {
    if (!this.web3 || !this.account) return
    try {
      this.balance = await this.web3.eth.getBalance(this.account)
    } catch (error) {}
  }

  // Init the Poolz contracts
  // private async initContracts() {}

  async getChaincoinInfo(chainId?: typeof this.chainId) {
    if (!chainId) chainId = this.chainId
    try {
      return CHAINS.find((chain) => chain.chainId === chainId)
    } catch (error) {}
  }

  /*async ERC20() {
    try {
      const chains = await import("../abi/ERC20.json")
      return chains.default.abi
    } catch (error) {}
  }*/

  async Contract(name: "ERC20", address?: string): Promise<Contract | undefined> {
    if (!this.web3) return

    const collectionName = name + address ?? ""
    if (this.#contracts.has(collectionName)) return this.#contracts.get(collectionName)
    try {
      if (name === "ERC20") {
        // const abi = await this.ERC20()
        // const contract = new this.web3.eth.Contract(abi as AbiItem[], address)

        const contract = new this.web3.eth.Contract(ERC20.abi as AbiItem[], address)
        this.#contracts.set(collectionName, contract)
        return contract
      }
    } catch (error) {}
  }
}

export default ThePoolz
