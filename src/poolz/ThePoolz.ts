import Web3 from "web3"
import type { Contract } from "web3-eth-contract"
import type { AbiItem } from "web3-utils"
import type { IThePoolzInterface, IERC20Info } from "../types/IThePoolzInterface"
import { CUSTOMER_ACCOUNT_VARIABLE, DEFAULT_CHAIN_ID, AVAILABLE_CHAINS } from "../constants"
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
  public lockDealNFTContract: IThePoolzInterface["lockDealNFTContract"]
  public vaultManagerContract: IThePoolzInterface["vaultManagerContract"]
  public dealProviderContract: IThePoolzInterface["dealProviderContract"]
  public lockDealProviderContract: IThePoolzInterface["lockDealProviderContract"]
  public timedDealProviderContract: IThePoolzInterface["timedDealProviderContract"]
  public collateralProviderContract: IThePoolzInterface["collateralProviderContract"]
  public refundProviderContract: IThePoolzInterface["refundProviderContract"]
  public simpleBuilderContract: IThePoolzInterface["simpleBuilderContract"]
  public simpleRefundBuilderContract: IThePoolzInterface["simpleRefundBuilderContract"]
  public multiSenderContract: IThePoolzInterface["multiSenderContract"]
  public delayVaultProviderContract: IThePoolzInterface["delayVaultProviderContract"]

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
    if (accounts.length) this.account = localStorage.getItem(CUSTOMER_ACCOUNT_VARIABLE) ?? accounts[0]
  }

  private async getBalance() {
    if (!this.#provider || !this.account) return
    this.balance = await this.web3.eth.getBalance(this.account)
  }

  private async initPoolzContracts() {
    const chainConfig = AVAILABLE_CHAINS.get(this.chainId)
    if (!chainConfig) return
    const {
      poolzTokenAddress,
      poolzAddress,
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
      multiSender,
      delayVaultProvider
    } = chainConfig

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

    const abifetchPromises = []

    if (lockedDealV2) {
      abifetchPromises.push(
        this.fetchContractAbi(lockedDealV2.nameVersion)
          .then((abi) => {
            this.lockedDealV2 = { ...lockedDealV2, contract: new this.web3.eth.Contract(abi as AbiItem[], lockedDealV2.address) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (delayVault) {
      abifetchPromises.push(
        this.fetchContractAbi(delayVault.nameVersion)
          .then((abi) => {
            this.delayVaultContract = { ...delayVault, contract: new this.web3.eth.Contract(abi as AbiItem[], delayVault.address) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (lockDealNFT) {
      abifetchPromises.push(
        this.fetchContractAbi(lockDealNFT.nameVersion)
          .then((abi) => {
            this.lockDealNFTContract = { ...lockDealNFT, contract: new this.web3.eth.Contract(abi as AbiItem[], lockDealNFT.address) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (vaultManager) {
      abifetchPromises.push(
        this.fetchContractAbi(vaultManager.nameVersion)
          .then((abi) => {
            this.vaultManagerContract = { ...vaultManager, contract: new this.web3.eth.Contract(abi as AbiItem[], vaultManager.address) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (dealProvider) {
      abifetchPromises.push(
        this.fetchContractAbi(dealProvider.nameVersion)
          .then((abi) => {
            this.dealProviderContract = { ...dealProvider, contract: new this.web3.eth.Contract(abi as AbiItem[], dealProvider.address) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (lockDealProvider) {
      abifetchPromises.push(
        this.fetchContractAbi(lockDealProvider.nameVersion)
          .then((abi) => {
            this.lockDealProviderContract = {
              ...lockDealProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], lockDealProvider.address)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (timedDealProvider) {
      abifetchPromises.push(
        this.fetchContractAbi(timedDealProvider.nameVersion)
          .then((abi) => {
            this.timedDealProviderContract = {
              ...timedDealProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], timedDealProvider.address)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (collateralProvider) {
      abifetchPromises.push(
        this.fetchContractAbi(collateralProvider.nameVersion)
          .then((abi) => {
            this.collateralProviderContract = {
              ...collateralProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], collateralProvider.address)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (refundProvider) {
      abifetchPromises.push(
        this.fetchContractAbi(refundProvider.nameVersion)
          .then((abi) => {
            this.refundProviderContract = {
              ...refundProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], refundProvider.address)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (simpleBuilder) {
      abifetchPromises.push(
        this.fetchContractAbi(simpleBuilder.nameVersion)
          .then((abi) => {
            this.simpleBuilderContract = { ...simpleBuilder, contract: new this.web3.eth.Contract(abi as AbiItem[], simpleBuilder.address) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (simpleRefundBuilder) {
      abifetchPromises.push(
        this.fetchContractAbi(simpleRefundBuilder.nameVersion)
          .then((abi) => {
            this.simpleRefundBuilderContract = {
              ...simpleRefundBuilder,
              contract: new this.web3.eth.Contract(abi as AbiItem[], simpleRefundBuilder.address)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (multiSender) {
      abifetchPromises.push(
        this.fetchContractAbi(multiSender.nameVersion)
          .then((abi) => {
            this.multiSenderContract = { ...multiSender, contract: new this.web3.eth.Contract(abi as AbiItem[], multiSender.address) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (delayVaultProvider) {
      abifetchPromises.push(
        this.fetchContractAbi(delayVaultProvider.nameVersion)
          .then((abi) => {
            this.delayVaultProviderContract = {
              ...delayVaultProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], delayVaultProvider.address)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }

    try {
      await Promise.allSettled(abifetchPromises)
    } catch (e) {
      console.error(e)
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
    } catch (e) {}
  }
  private async fetchContractAbi(nameVersion: string) {
    const response = await fetch(`https://poolzfinancedata.com/contracts?_where[0][NameVersion]=${nameVersion}`)
    return (await response.json())[0].ABI
  }
}

export default ThePoolz
