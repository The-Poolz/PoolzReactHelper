import Web3 from "web3"
import { Contract } from "web3-eth-contract"

export type AcceptableContractNames =
  | "PoolzBack"
  | "LockedDeal"
  | "Whitelist"
  | "SignUp"
  | "EnvelopToken"
  | "BeaconToken"
  | "DelayVault"
  | "TemporaryToken"
  | "MultiWithdraw"
  | "LockDealNFT"
  | "VaultManager"
  | "DealProvider"
  | "LockDealProvider"
  | "TimedDealProvider"
  | "CollateralProvider"
  | "RefundProvider"
  | "SimpleBuilder"
  | "SimpleRefundBuilder"
  | "DelayVaultProvider"
  | "DelayVaultMigrator"
  | "TokenNFTConnector"
  | "MultiSenderV2"

export type VersionNumber = `${number}.${number}.${number}`

export type NameVersion =
  | `${AcceptableContractNames}@${VersionNumber}`
  | `${AcceptableContractNames}@${VersionNumber}-${string}`
  | "CPoolx"
  | "CWhiteList"
  | "CSignUp"
export interface IContractInfo {
  address: string
  nameVersion: NameVersion
  contract: Contract
  proxy?: string
  proxyContract?: Contract
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
  multiSenderV2Contract?: IContractInfo
  delayVaultProviderContract?: IContractInfo
  delayVaultMigratorContract?: IContractInfo
  tokenNFTConnectorContract?: IContractInfo

  init(): Promise<void>
  getChaincoinInfo(k?: number): Promise<IChainInfo | undefined>
  ERC20(token: string): Promise<Contract>
  ERC20Balance(token: string, account: string): Promise<string>
  ERC20Allowance(token: string, account: string, spender: string): Promise<string>
  ERC20Approve(token: string, account: string, spender: string, amount: string): Promise<void>
  ERC20Info(token: string): Promise<IERC20Info>
  Contract(name: string, address: string): Promise<Contract | undefined>
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

  multiSenderV2: Omit<NonNullable<IThePoolzInterface["multiSenderV2Contract"]>, "contract">
  delayVaultProvider: Omit<NonNullable<IThePoolzInterface["delayVaultProviderContract"]>, "contract">
  delayVaultMigrator: Omit<NonNullable<IThePoolzInterface["delayVaultMigratorContract"]>, "contract">
  tokenNFTConnector: Omit<NonNullable<IThePoolzInterface["tokenNFTConnectorContract"]>, "contract">
}

// copy chain data from  https://chainid.network/chains.json
export interface IChainInfo {
  name: string;
  chain: string;
  icon?: string;
  rpc?: string[];
  features?: Array<{
    name: string;
  }>;
  faucets?: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  infoURL?: string;
  shortName?: string;
  chainId: number;
  networkId?: number;
  slip44?: number;
  ens?: {
    registry: string;
  };
  explorers?: Array<{
    name: string;
    url: string;
    icon?: string;
    standard: string;
  }>;
}

export type TChainConfig = Partial<IChainConfig> & {
  chainInfo: IChainInfo;
}