import Web3 from "web3"
import { Contract } from "web3-eth-contract"

export interface IChainInfo {
  name: string
  chain: string
  nativeCurrency: { name: string; symbol: string; decimals: number }
  infoURL: string
  chainId: number
}

export interface IContractInfo {
  address: string
  nameVersion: string
  contract: Contract
}
export interface IERC20Info {
  address: string
  decimals: number
  symbol?: string
  name?: string
}
export interface IThePoolzInterface {
  account?: string
  chainId: number
  balance: string
  web3: Web3
  /**
   * @deprecated Use {@link CPoolx.address} instead.
   */
  poolzAddress?: string
  /**
   * @deprecated Use {@link CPoolx.contract} instead.
   */
  poolzContract?: Contract
  CPoolx?: IContractInfo

  lockedDealV2?: IContractInfo

  /**
   * @deprecated Use {@link CWhiteList.address} instead.
   */
  whiteListAddress?: string
  /**
   * @deprecated Use {@link CWhiteList.contract} instead.
   */
  whiteListContract?: Contract
  CWhiteList?: IContractInfo
  /**
   * @deprecated Use {@link CSignUp.address} instead.
   */
  signUpAddress?: string
  /**
   * @deprecated Use {@link CSignUp.contract} instead.
   */
  signUpContract?: Contract
  CSignUp?: IContractInfo

  poolzBackWithdraw?: string[]
  poolzBackWithdrawContract?: Contract[]
  // CBackWithdraw?: IContractInfo

  poolzTokenAddress?: string
  delayVaultContract?: IContractInfo
  lockDealNFTContract?: IContractInfo
  vaultManagerContract?: IContractInfo
  dealProviderContract?: IContractInfo
  lockDealProviderContract?: IContractInfo
  timedDealProviderContract?: IContractInfo
  collateralProviderContract?: IContractInfo
  refundProviderContract?: IContractInfo
  simpleBuilderContract?: IContractInfo
  simpleRefundBuilderContract?: IContractInfo
  multiSenderContract?: IContractInfo
  delayVaultProviderContract?: IContractInfo

  getChaincoinInfo(k?: number): Promise<IChainInfo | undefined>
  ERC20Balance(token: string, account: string): Promise<string>
  ERC20Allowance(token: string, account: string, spender: string): Promise<string>
  ERC20Approve(token: string, account: string, spender: string, amount: string): Promise<void>
  ERC20Info(token: string): Promise<IERC20Info>
  Contract(name: string, address: string): Promise<Contract | undefined>

  /**
   * @deprecated Need remove.
   */
  lockedDealContract?: Contract[]
  /**
   * @deprecated Need remove.
   */
  lotteryContract?: Contract
}

export interface IThePoolzContextInterface {
  thePoolz: IThePoolzInterface
  setProvider: React.Dispatch<React.SetStateAction<typeof Web3.givenProvider>>
}

export interface IChainConfig {
  poolzAddress: IThePoolzInterface["poolzAddress"]
  poolzContract: IThePoolzInterface["poolzContract"]
  CPoolx: IThePoolzInterface["CPoolx"]

  lockedDealV2: Omit<NonNullable<IThePoolzInterface["lockedDealV2"]>, "contract">

  whiteListAddress: IThePoolzInterface["whiteListAddress"]
  whiteListContract: IThePoolzInterface["whiteListContract"]
  CWhiteList: IThePoolzInterface["CWhiteList"]

  signUpAddress: IThePoolzInterface["signUpAddress"]
  signUpContract: IThePoolzInterface["signUpContract"]
  CSignUp: IThePoolzInterface["CSignUp"]

  poolzBackWithdraw: IThePoolzInterface["poolzBackWithdraw"] | string
  poolzBackWithdrawContract: IThePoolzInterface["poolzBackWithdrawContract"]
  // CBackWithdraw: IThePoolzInterface["CBackWithdraw"]

  poolzTokenAddress: IThePoolzInterface["poolzTokenAddress"]
  delayVault: Omit<NonNullable<IThePoolzInterface["delayVaultContract"]>, "contract">
  lockDealNFT: Omit<NonNullable<IThePoolzInterface["lockDealNFTContract"]>, "contract">
  vaultManager: Omit<NonNullable<IThePoolzInterface["vaultManagerContract"]>, "contract">
  dealProvider: Omit<NonNullable<IThePoolzInterface["dealProviderContract"]>, "contract">
  lockDealProvider: Omit<NonNullable<IThePoolzInterface["lockDealProviderContract"]>, "contract">
  timedDealProvider: Omit<NonNullable<IThePoolzInterface["timedDealProviderContract"]>, "contract">
  collateralProvider: Omit<NonNullable<IThePoolzInterface["collateralProviderContract"]>, "contract">
  refundProvider: Omit<NonNullable<IThePoolzInterface["refundProviderContract"]>, "contract">
  simpleBuilder: Omit<NonNullable<IThePoolzInterface["simpleBuilderContract"]>, "contract">
  simpleRefundBuilder: Omit<NonNullable<IThePoolzInterface["simpleRefundBuilderContract"]>, "contract">
  multiSender: Omit<NonNullable<IThePoolzInterface["multiSenderContract"]>, "contract">
  delayVaultProvider: Omit<NonNullable<IThePoolzInterface["delayVaultProviderContract"]>, "contract">
}

export type TChainConfig = Partial<IChainConfig>
