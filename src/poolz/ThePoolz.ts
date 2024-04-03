import Web3 from "web3"
import type { Contract } from "web3-eth-contract"
import type { AbiItem } from "web3-utils"
import type { IThePoolzInterface, IERC20Info, ChainOverrides } from "../types/IThePoolzInterface"
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
  public multiSenderV2Contract: IThePoolzInterface["multiSenderV2Contract"]
  public tempMultiSenderContract: IThePoolzInterface["tempMultiSenderContract"]
  public delayVaultProviderContract: IThePoolzInterface["delayVaultProviderContract"]
  public delayVaultMigratorContract: IThePoolzInterface["delayVaultMigratorContract"]
  public tokenNFTConnectorContract: IThePoolzInterface["tokenNFTConnectorContract"]

  #provider: typeof Web3.givenProvider
  #contracts = new Map<string, Contract>()
  #isTrustWallet = false

  constructor(provider: typeof Web3.givenProvider) {
    this.#provider = provider
    this.web3 = new Web3(provider)
    this.#isTrustWallet = !!provider?.isTrustWallet
  }
  async init(overrides?: ChainOverrides) {
    await this.initTrust()
    await this.initChainId()
    await this.initAccount()
    await this.getBalance()
    await this.initPoolzContracts(overrides)
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

  private async initPoolzContracts(overrides?: ChainOverrides) {
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
      multiSenderV2,
      tempMultiSender,
      delayVaultProvider,
      delayVaultMigrator,
      tokenNFTConnector
    } = chainConfig

    this.poolzTokenAddress = poolzTokenAddress

    if (poolzAddress) {
      const contractAddress = overrides?.poolzAddress ? overrides.poolzAddress : poolzAddress
      const poolzContract = new this.web3.eth.Contract(POOLZ.abi as AbiItem[], contractAddress)
      poolzContract.options.address = contractAddress
      // deprecated
      this.poolzAddress = contractAddress
      // deprecated
      this.poolzContract = poolzContract
      this.CPoolx = {
        address: contractAddress,
        nameVersion: "CPoolx",
        contract: poolzContract
      }
    }
    if (whiteListAddress) {
      const contractAddress = overrides?.whiteListAddress ? overrides.whiteListAddress : whiteListAddress
      const whiteListContract = new this.web3.eth.Contract(WhiteList.abi as AbiItem[], contractAddress)
      // deprecated
      this.whiteListAddress = contractAddress
      // deprecated
      this.whiteListContract = whiteListContract
      this.CWhiteList = {
        address: contractAddress,
        nameVersion: "CWhiteList",
        contract: whiteListContract
      }
    }
    if (poolzBackWithdraw) {
      this.poolzBackWithdraw = Array.isArray(poolzBackWithdraw) ? poolzBackWithdraw : [poolzBackWithdraw]
      this.poolzBackWithdrawContract = this.poolzBackWithdraw.map((address) => new this.web3.eth.Contract(POOLZ.abi as AbiItem[], address))
    }
    
    if (signUpAddress) {
      const contractAddress = overrides?.signUpAddress ? overrides.signUpAddress : signUpAddress
      this.signUpAddress = contractAddress
      const signUpContract = new this.web3.eth.Contract(SignUp.abi as AbiItem[], contractAddress)
      this.signUpContract = signUpContract
      this.CSignUp = {
        address: contractAddress,
        nameVersion: "CSignUp",
        contract: signUpContract
      }
    }

    const abifetchPromises = []

    if (lockedDealV2) {
      const contractAddress = overrides?.lockedDealV2 ? overrides.lockedDealV2 : lockedDealV2.address
      abifetchPromises.push(
        this.fetchContractAbi(lockedDealV2.nameVersion)
          .then((abi) => {
            this.lockedDealV2 = { ...lockedDealV2, contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (delayVault) {
      const contractAddress = overrides?.delayVault ? overrides.delayVault : delayVault.address
      abifetchPromises.push(
        this.fetchContractAbi(delayVault.nameVersion)
          .then((abi) => {
            this.delayVaultContract = { ...delayVault, contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (lockDealNFT) {
      const contractAddress = overrides?.lockDealNFT ? overrides.lockDealNFT : lockDealNFT.address
      abifetchPromises.push(
        this.fetchContractAbi(lockDealNFT.nameVersion)
          .then((abi) => {
            this.lockDealNFTContract = { ...lockDealNFT, contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (vaultManager) {
      const contractAddress = overrides?.vaultManager ? overrides.vaultManager : vaultManager.address
      abifetchPromises.push(
        this.fetchContractAbi(vaultManager.nameVersion)
          .then((abi) => {
            this.vaultManagerContract = { ...vaultManager, contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (dealProvider) {
      const contractAddress = overrides?.dealProvider ? overrides.dealProvider : dealProvider.address
      abifetchPromises.push(
        this.fetchContractAbi(dealProvider.nameVersion)
          .then((abi) => {
            this.dealProviderContract = { ...dealProvider, contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (lockDealProvider) {
      const contractAddress = overrides?.lockDealProvider ? overrides.lockDealProvider : lockDealProvider.address
      abifetchPromises.push(
        this.fetchContractAbi(lockDealProvider.nameVersion)
          .then((abi) => {
            this.lockDealProviderContract = {
              ...lockDealProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (timedDealProvider) {
      const contractAddress = overrides?.timedDealProvider ? overrides.timedDealProvider : timedDealProvider.address
      abifetchPromises.push(
        this.fetchContractAbi(timedDealProvider.nameVersion)
          .then((abi) => {
            this.timedDealProviderContract = {
              ...timedDealProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (collateralProvider) {
      const contractAddress = overrides?.collateralProvider ? overrides.collateralProvider : collateralProvider.address
      abifetchPromises.push(
        this.fetchContractAbi(collateralProvider.nameVersion)
          .then((abi) => {
            this.collateralProviderContract = {
              ...collateralProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (refundProvider) {
      const contractAddress = overrides?.refundProvider ? overrides.refundProvider : refundProvider.address
      abifetchPromises.push(
        this.fetchContractAbi(refundProvider.nameVersion)
          .then((abi) => {
            this.refundProviderContract = {
              ...refundProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (simpleBuilder) {
      const contractAddress = overrides?.simpleBuilder ? overrides.simpleBuilder : simpleBuilder.address
      abifetchPromises.push(
        this.fetchContractAbi(simpleBuilder.nameVersion)
          .then((abi) => {
            this.simpleBuilderContract = { ...simpleBuilder, contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (simpleRefundBuilder) {
      const contractAddress = overrides?.simpleRefundBuilder ? overrides.simpleRefundBuilder : simpleRefundBuilder.address
      abifetchPromises.push(
        this.fetchContractAbi(simpleRefundBuilder.nameVersion)
          .then((abi) => {
            this.simpleRefundBuilderContract = {
              ...simpleRefundBuilder,
              contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (multiSender) {
      const contractAddress = overrides?.multiSender ? overrides.multiSender : multiSender.address
      abifetchPromises.push(
        this.fetchContractAbi(multiSender.nameVersion)
          .then((abi) => {
            this.multiSenderContract = { ...multiSender, contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (multiSenderV2) {
      const contractAddress = overrides?.multiSenderV2 ? overrides.multiSenderV2 : multiSenderV2.address
      abifetchPromises.push(
        this.fetchContractAbi(multiSenderV2.nameVersion)
          .then((abi) => {
            this.multiSenderV2Contract = { ...multiSenderV2, contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (tempMultiSender) {
      const contractAddress = overrides?.tempMultiSender ? overrides.tempMultiSender : tempMultiSender.address
      abifetchPromises.push(
        this.fetchContractAbi(tempMultiSender.nameVersion)
          .then((abi) => {
            this.tempMultiSenderContract = { ...tempMultiSender, contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress) }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (delayVaultProvider) {
      const contractAddress = overrides?.delayVaultProvider ? overrides.delayVaultProvider : delayVaultProvider.address
      abifetchPromises.push(
        this.fetchContractAbi(delayVaultProvider.nameVersion)
          .then((abi) => {
            this.delayVaultProviderContract = {
              ...delayVaultProvider,
              contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (delayVaultMigrator) {
      const contractAddress = overrides?.delayVaultMigrator ? overrides.delayVaultMigrator : delayVaultMigrator.address
      abifetchPromises.push(
        this.fetchContractAbi(delayVaultMigrator.nameVersion)
          .then((abi) => {
            this.delayVaultMigratorContract = {
              ...delayVaultMigrator,
              contract: new this.web3.eth.Contract(abi as AbiItem[], contractAddress)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      )
    }
    if (tokenNFTConnector) {
      abifetchPromises.push(
        this.fetchContractAbi(tokenNFTConnector.nameVersion)
          .then((abi) => {
            this.tokenNFTConnectorContract = {
              ...tokenNFTConnector,
              contract: new this.web3.eth.Contract(abi as AbiItem[], tokenNFTConnector.address),
              proxyContract: tokenNFTConnector.proxy ? new this.web3.eth.Contract(abi as AbiItem[], tokenNFTConnector.proxy) : undefined
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
