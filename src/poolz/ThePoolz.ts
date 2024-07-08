import Web3, { Contract, ContractAbi, Web3APISpec, EIP1193Provider } from "web3"
import type {
  IThePoolzInterface,
  IERC20Info,
  TChainConfig,
  IChainConfig,
  IContractInfo
} from "../types/IThePoolzInterface"
import { CUSTOMER_ACCOUNT_VARIABLE, DEFAULT_CHAIN_ID, AVAILABLE_CHAINS } from "../constants"
import ERC20 from "../contracts/abi/ERC20.json"

// ensure that the class does not have any extra properties that are not in the interface
type EnforceInterface<T, U> = { [K in keyof U]: K extends keyof T ? T[K] : never }

class ThePoolz implements EnforceInterface<IThePoolzInterface, ThePoolz> {
  public account: IThePoolzInterface["account"]
  public chainId: IThePoolzInterface["chainId"] = DEFAULT_CHAIN_ID
  public web3: IThePoolzInterface["web3"]
  public balance: IThePoolzInterface["balance"] = "0"

  #provider?: EIP1193Provider<Web3APISpec>
  #contracts = new Map<string, Contract<ContractAbi>>()
  #overrides: TChainConfig | undefined = undefined

  constructor(provider?: EIP1193Provider<Web3APISpec>, overrides?: TChainConfig) {
    this.#provider = provider
    this.web3 = new Web3(provider)
    this.#overrides = overrides
  }
  async init() {
    await this.initChainId()
    await this.initAccount()
    await this.getBalance()
  }
  private async initChainId() {
    if (!this.#provider) return
    this.chainId = Number(await this.web3.eth.getChainId())
  }

  private async initAccount() {
    if (!this.#provider) return
    const accounts = await this.web3.eth.getAccounts()
    if (accounts.length) this.account = localStorage.getItem(CUSTOMER_ACCOUNT_VARIABLE) ?? accounts[0]
  }

  private async getBalance() {
    if (!this.#provider || !this.account) return
    this.balance = String(await this.web3.eth.getBalance(this.account))
  }

  async getChaincoinInfo(chainId?: typeof this.chainId) {
    if (!chainId) chainId = this.chainId
    const chain = AVAILABLE_CHAINS.get(chainId)
    if (!chain) return
    return chain.chainInfo
  }

  async ERC20(token: string) {
    const cache = this.#contracts.get(token)
    if (cache) return cache

    const contract = new this.web3.eth.Contract(ERC20.abi as ContractAbi, token)
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
      ERC20Contract.methods.decimals().call() as Promise<string>
    ])

    return { address: token, decimals: parseInt(data[2]), symbol: data[1], name: data[0] } as IERC20Info
  }

  async ERC20Allowance(token: string, account: string, spender: string) {
    const ERC20Contract = await this.ERC20(token)
    return (await ERC20Contract.methods.allowance(account, spender).call()) as string
  }

  public async ERC20Approve(token: string, account: string, spender: string, amount: string) {
    const ERC20Contract = await this.ERC20(token)
    return ERC20Contract.methods.approve(spender, amount).send({ from: account })
  }

  public async Contract(name: keyof IChainConfig) {
    const chainConfig = AVAILABLE_CHAINS.get(this.chainId)
    if (!chainConfig) return
    if (this.#overrides) Object.assign(chainConfig, this.#overrides)
    if (!chainConfig[name]) return
    const { address, nameVersion } = chainConfig[name] as IContractInfo
    if (!address || !nameVersion) return

    const collectionName = nameVersion + address
    if (this.#contracts.has(collectionName)) return this.#contracts.get(collectionName)
    try {
      const abi = await this.fetchContractAbi(nameVersion)
      const contract = new this.web3.eth.Contract(abi, address)
      this.#contracts.set(collectionName, contract)
      return contract
    } catch (e) {}
  }
  private async fetchContractAbi(nameVersion: string) {
    const response = await fetch(`https://poolzfinancedata.com/contracts?_where[0][NameVersion]=${nameVersion}`)
    return (await response.json())[0].ABI
  }

  public static get givenProvider() {
    if (window.ethereum)
      if ("selectedProvider" in window.ethereum) return window.ethereum.selectedProvider
      else return window.ethereum as EIP1193Provider<Web3APISpec>
    return undefined
  }
}

export default ThePoolz
