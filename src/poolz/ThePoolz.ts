import Web3 from "web3"
import type { Contract } from "web3-eth-contract"
import type { AbiItem } from "web3-utils"
import type { IThePoolzInterface, IERC20Info, TChainConfig } from "../types/IThePoolzInterface"
import { CUSTOMER_ACCOUNT_VARIABLE, DEFAULT_CHAIN_ID, AVAILABLE_CHAINS } from "../constants"
import ERC20 from "../contracts/abi/ERC20.json"
import POOLZ from "../contracts/abi/ThePoolz.json"
import InvestProvider from "../contracts/abi/InvestProvider.json"
import WhiteList from "../contracts/abi/WhiteList.json"
import SignUp from "../contracts/abi/SignUpPool.json"
import LockedDealV2 from "../contracts/abi/LockedDealV2.json"
import DelayVault from "../contracts/abi/DelayVault.json"
import LockDealNFT from "../contracts/abi/LockDealNFT.json"
import VaultManager from "../contracts/abi/VaultManager.json"
import DealProvider from "../contracts/abi/DealProvider.json"
import LockDealProvider from "../contracts/abi/LockDealProvider.json"
import TimedDealProvider from "../contracts/abi/TimedDealProvider.json"
import CollateralProvider from "../contracts/abi/CollateralProvider.json"
import RefundProvider from "../contracts/abi/RefundProvider.json"
import SimpleBuilder from "../contracts/abi/SimpleBuilder.json"
import SimpleRefundBuilder from "../contracts/abi/SimpleRefundBuilder.json"
import MultiSenderV2 from "../contracts/abi/MultiSenderV2.json"
import DelayVaultProvider from "../contracts/abi/DelayVaultProvider.json"
import DelayVaultMigrator from "../contracts/abi/DelayVaultMigrator.json"
import TokenNFTConnector from "../contracts/abi/TokenNFTConnector.json"
import DispenserProvider from "../contracts/abi/DispenserProvider.json"

// ensure that the class does not have any extra properties that are not in the interface
type EnforceInterface<T, U> = { [K in keyof U]: K extends keyof T ? T[K] : never }

class ThePoolz implements EnforceInterface<IThePoolzInterface, ThePoolz> {
  public account: IThePoolzInterface["account"]
  public chainId: IThePoolzInterface["chainId"] = DEFAULT_CHAIN_ID
  public web3: IThePoolzInterface["web3"]
  public balance: IThePoolzInterface["balance"] = "0"
  public poolzTokenAddress: IThePoolzInterface["poolzTokenAddress"]
  public poolzAddress: IThePoolzInterface["poolzAddress"]
  public investProviderAddress: IThePoolzInterface["investProviderAddress"]
  public dispenserAddress: IThePoolzInterface["dispenserAddress"]
  public poolzContract: IThePoolzInterface["poolzContract"]
  public CPoolx: IThePoolzInterface["CPoolx"]
  public investProviderContract: IThePoolzInterface["investProviderContract"]
  public CInvestProvider: IThePoolzInterface["CInvestProvider"]

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
  public lockDealNFTContract: IThePoolzInterface["lockDealNFTContract"]
  public vaultManagerContract: IThePoolzInterface["vaultManagerContract"]
  public dealProviderContract: IThePoolzInterface["dealProviderContract"]
  public lockDealProviderContract: IThePoolzInterface["lockDealProviderContract"]
  public timedDealProviderContract: IThePoolzInterface["timedDealProviderContract"]
  public collateralProviderContract: IThePoolzInterface["collateralProviderContract"]
  public refundProviderContract: IThePoolzInterface["refundProviderContract"]
  public simpleBuilderContract: IThePoolzInterface["simpleBuilderContract"]
  public simpleRefundBuilderContract: IThePoolzInterface["simpleRefundBuilderContract"]
  public multiSenderV2Contract: IThePoolzInterface["multiSenderV2Contract"]
  public delayVaultProviderContract: IThePoolzInterface["delayVaultProviderContract"]
  public delayVaultMigratorContract: IThePoolzInterface["delayVaultMigratorContract"]
  public tokenNFTConnectorContract: IThePoolzInterface["tokenNFTConnectorContract"]
  public dispenserProviderContract: IThePoolzInterface["dispenserProviderContract"]

  #provider: typeof Web3.givenProvider
  #contracts = new Map<string, Contract>()
  #isTrustWallet = false
  #overrides: TChainConfig | undefined = undefined

  constructor(provider: typeof Web3.givenProvider, overrides?: TChainConfig) {
    this.#provider = provider
    this.web3 = new Web3(provider)
    this.#isTrustWallet = !!provider?.isTrustWallet
    this.#overrides = overrides
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
    if (accounts.length) this.account = localStorage.getItem(CUSTOMER_ACCOUNT_VARIABLE) ?? accounts[0]
  }

  private async getBalance() {
    if (!this.#provider || !this.account) return
    this.balance = await this.web3.eth.getBalance(this.account)
  }

  private async initPoolzContracts() {
    const chainConfig = AVAILABLE_CHAINS.get(this.chainId)
    if (!chainConfig) return
    if (this.#overrides) Object.assign(chainConfig, this.#overrides)
    const {
      poolzTokenAddress,
      poolzAddress,
      dispenserAddress,
      whiteListAddress,
      lockedDealV2,
      poolzBackWithdraw,
      signUpAddress,
      delayVault,
      lockDealNFT,
      vaultManager,
      dealProvider,
      lockDealProvider,
      timedDealProvider,
      collateralProvider,
      refundProvider,
      simpleBuilder,
      simpleRefundBuilder,
      multiSenderV2,
      delayVaultProvider,
      delayVaultMigrator,
      tokenNFTConnector,
      dispenserProvider,
      investProviderAddress
    } = chainConfig

    this.poolzTokenAddress = poolzTokenAddress
    if (dispenserAddress) this.dispenserAddress = dispenserAddress
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
    if (investProviderAddress) {
      const investProviderContract = new this.web3.eth.Contract(InvestProvider.abi as AbiItem[], investProviderAddress)
      investProviderContract.options.address = investProviderAddress
      // deprecated
      this.investProviderAddress = investProviderAddress
      // deprecated
      this.investProviderContract = investProviderContract
      this.CInvestProvider = {
        address: investProviderAddress,
        nameVersion: "CInvestProvider",
        contract: investProviderContract
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

    const contractsToInit = [
      { key: "lockedDealV2", config: lockedDealV2, abi: LockedDealV2.abi },
      { key: "delayVaultContract", config: delayVault, abi: DelayVault.abi },
      { key: "lockDealNFTContract", config: lockDealNFT, abi: LockDealNFT.abi },
      { key: "vaultManagerContract", config: vaultManager, abi: VaultManager.abi },
      { key: "dealProviderContract", config: dealProvider, abi: DealProvider.abi },
      { key: "lockDealProviderContract", config: lockDealProvider, abi: LockDealProvider.abi },
      { key: "timedDealProviderContract", config: timedDealProvider, abi: TimedDealProvider.abi },
      { key: "collateralProviderContract", config: collateralProvider, abi: CollateralProvider.abi },
      { key: "refundProviderContract", config: refundProvider, abi: RefundProvider.abi },
      { key: "simpleBuilderContract", config: simpleBuilder, abi: SimpleBuilder.abi },
      { key: "simpleRefundBuilderContract", config: simpleRefundBuilder, abi: SimpleRefundBuilder.abi },
      { key: "multiSenderV2Contract", config: multiSenderV2, abi: MultiSenderV2.abi },
      { key: "delayVaultProviderContract", config: delayVaultProvider, abi: DelayVaultProvider.abi },
      { key: "delayVaultMigratorContract", config: delayVaultMigrator, abi: DelayVaultMigrator.abi },
      { key: "tokenNFTConnectorContract", config: tokenNFTConnector, abi: TokenNFTConnector.abi },
      { key: "dispenserProviderContract", config: dispenserProvider, abi: DispenserProvider.abi }
    ]

    contractsToInit.forEach(({ key, config, abi }) => {
      if (!config) return
      const _this = this as Record<string, any>
      _this[key] = {
        ...config,
        contract: new this.web3.eth.Contract(abi as AbiItem[], config.address)
      }
    })
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

    return { address: token, decimals: parseInt(data[2]), symbol: data[1], name: data[0] } as IERC20Info
  }

  async ERC20Allowance(token: string, account: string, spender: string) {
    const ERC20Contract = await this.ERC20(token)
    return (await ERC20Contract.methods.allowance(account, spender).call()) as string
  }

  async ERC20Approve(token: string, account: string, spender: string, amount: string) {
    const ERC20Contract = await this.ERC20(token)
    return ERC20Contract.methods.approve(spender, amount).send({ from: account, maxPriorityFeePerGas: null, maxFeePerGas: null })
  }

  async Contract(name: string, address: string) {
    const collectionName = name + address
    if (this.#contracts.has(collectionName)) return this.#contracts.get(collectionName)
    try {
      const abi = await this.fetchContractAbi(name)
      const contract = new this.web3.eth.Contract(abi as AbiItem[], address)
      this.#contracts.set(collectionName, contract)
      return contract
    } catch (e) {
      throw new Error(`Failed to create contract ${name} at ${address}: ${(e as Error).message}`)
    }
  }
  /**
   * Fetches ABI by contract name version from Poolz database.
   * Throws an error when the request fails or the ABI is missing.
   */
  private async fetchContractAbi(nameVersion: string) {
    const response = await fetch(`https://poolzfinancedata.com/contracts?_where[0][NameVersion]=${nameVersion}`)
    if (!response.ok) {
      throw new Error(`Unable to fetch ABI for ${nameVersion}: ${response.status} ${response.statusText}`)
    }
    const data = await response.json()
    if (!Array.isArray(data) || !data[0]?.ABI) {
      throw new Error(`ABI for ${nameVersion} not found`)
    }
    return data[0].ABI
  }
}

export default ThePoolz
