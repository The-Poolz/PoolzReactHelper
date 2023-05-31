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
   * @deprecated Use {@link CPoolx} instead.
   */
  poolzAddress?: string
  /**
   * @deprecated Use {@link CPoolx} instead.
   */
  poolzContract?: Contract
  CPoolx?: IContractInfo

  lockedDealV2?: IContractInfo

  /**
   * @deprecated Use {@link CWhiteList} instead.
   */
  whiteListAddress?: string
  /**
   * @deprecated Use {@link CWhiteList} instead.
   */
  whiteListContract?: Contract
  CWhiteList?: IContractInfo
  /**
   * @deprecated Use {@link CSignUp} instead.
   */
  signUpAddress?: string
  /**
   * @deprecated Use {@link CSignUp} instead.
   */
  signUpContract?: Contract
  CSignUp?: IContractInfo

  poolzBackWithdraw?: string[]
  poolzBackWithdrawContract?: Contract[]
  // CBackWithdraw?: IContractInfo

  poolzTokenAddress?: string
  delayVaultContract?: IContractInfo

  getChaincoinInfo(k?: number): Promise<IChainInfo | undefined>
  ERC20Balance(token: string, account: string): Promise<string>
  ERC20Info(token: string): Promise<IERC20Info>
  /**
   * @deprecated Use {@link ERC20Balance} instead.
   */
  Contract(name: string, address?: string): Promise<Contract | undefined>

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
}

export type TChainConfig = Partial<IChainConfig>
