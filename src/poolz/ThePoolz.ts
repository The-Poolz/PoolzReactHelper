import Web3 from "web3"
import type { Contract } from "web3-eth-contract"
import type { AbiItem } from "web3-utils"
import type { IThePoolzInterface } from "../types/IThePoolzInterface"
import { DEFAULT_CHAIN_ID, AVAILABLE_CHAINS } from "../constants"
import ERC20 from "../contracts/abi/ERC20.json"
import POOLZ from "../contracts/abi/ThePoolz.json"
import WhiteList from "../contracts/abi/WhiteList.json"
import SignUp from "../contracts/abi/SignUpPool.json"
import CHAINS from "../constants/chains.json"

class ThePoolz implements IThePoolzInterface {
  public account: IThePoolzInterface["account"]
  public chainId: IThePoolzInterface["chainId"] = DEFAULT_CHAIN_ID
  public web3: IThePoolzInterface["web3"]
  public balance: IThePoolzInterface["balance"] = "0"
  public poolzTokenAddress: IThePoolzInterface["poolzTokenAddress"]
  public poolzAddress: IThePoolzInterface["poolzAddress"]
  public poolzContract: IThePoolzInterface["poolzContract"]
  public CPoolx: IThePoolzInterface["CPoolx"]

  public whiteListAddress: IThePoolzInterface["whiteListAddress"]
  public whiteListContract: IThePoolzInterface["whiteListContract"]
  public CWhiteList: IThePoolzInterface["CWhiteList"]
  public signUpAddress: IThePoolzInterface["signUpAddress"]
  public signUpContract: IThePoolzInterface["signUpContract"]
  public CSignUp: IThePoolzInterface["CSignUp"]
  public poolzBackWithdraw: IThePoolzInterface["poolzBackWithdraw"]
  public poolzBackWithdrawContract: IThePoolzInterface["poolzBackWithdrawContract"]
  public lockedDealV2: IThePoolzInterface["lockedDealV2"]
  public delayVaultContract: IThePoolzInterface["delayVaultContract"]

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
    await this.initPoolzContracts()
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

  private async initPoolzContracts() {
    const chainConfig = AVAILABLE_CHAINS.get(this.chainId)
    if (!chainConfig) return
    const { poolzTokenAddress, poolzAddress, whiteListAddress, lockedDealV2, poolzBackWithdraw, signUpAddress, delayVault } = chainConfig

    this.poolzTokenAddress = poolzTokenAddress

    if (poolzAddress) {
      const poolzContract = new this.web3.eth.Contract(POOLZ.abi as AbiItem[], poolzAddress)
      poolzContract.options.address = poolzAddress
      // deprecated
      this.poolzAddress = poolzAddress
      // deprecated
      this.poolzContract = poolzContract
      this.CPoolx = {
        address: poolzAddress,
        nameVersion: "CPoolx",
        contract: poolzContract
      }
    }
    if (whiteListAddress) {
      const whiteListContract = new this.web3.eth.Contract(WhiteList.abi as AbiItem[], whiteListAddress)
      // deprecated
      this.whiteListAddress = whiteListAddress
      // deprecated
      this.whiteListContract = whiteListContract
      this.CWhiteList = {
        address: whiteListAddress,
        nameVersion: "CWhiteList",
        contract: whiteListContract
      }
    }
    if (lockedDealV2) {
      try {
        const abi = await this.fetchContractAbi(lockedDealV2.nameVersion)
        this.lockedDealV2 = { ...lockedDealV2, contract: new this.web3.eth.Contract(abi as AbiItem[], lockedDealV2.address) }
      } catch (e) {}
    }
    if (poolzBackWithdraw) {
      this.poolzBackWithdraw = Array.isArray(poolzBackWithdraw) ? poolzBackWithdraw : [poolzBackWithdraw]
      this.poolzBackWithdrawContract = this.poolzBackWithdraw.map((address) => new this.web3.eth.Contract(POOLZ.abi as AbiItem[], address))
    }
    if (signUpAddress) {
      this.signUpAddress = signUpAddress
      const signUpContract = new this.web3.eth.Contract(SignUp.abi as AbiItem[], signUpAddress)
      this.signUpContract = signUpContract
      this.CSignUp = {
        address: signUpAddress,
        nameVersion: "CSignUp",
        contract: signUpContract
      }
    }
    if (delayVault) {
      try {
        const abi = await this.fetchContractAbi(delayVault.nameVersion)
        this.delayVaultContract = { ...delayVault, contract: new this.web3.eth.Contract(abi as AbiItem[], delayVault.address) }
      } catch (e) {}
    }
  }

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
  private async fetchContractAbi(nameVersion: string) {
    const response = await fetch(`https://poolzfinancedata.com/contracts?_where[0][NameVersion]=${nameVersion}`)
    return (await response.json())[0].ABI
  }
}

export default ThePoolz
