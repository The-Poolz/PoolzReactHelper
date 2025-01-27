import ThePoolzProvider from "./components/Provider"
import { useThePoolz, useSetProvider } from "./hooks/useThePoolz"
import { useConnectWallet } from "./hooks/useConnectWallet"
import { useTheSiwe } from "./hooks/useTheSiwe"
import { useSidNameForAddress } from "./hooks/useSid"
import { useSyncProviders } from "./hooks/useSyncProviders"

export { ThePoolzProvider, useThePoolz, useSetProvider, useConnectWallet, useSidNameForAddress, useTheSiwe, useSyncProviders }
export type { IThePoolzInterface, IERC20Info, IChainConfig, TChainConfig } from "./types/IThePoolzInterface"
export * from "./utils"
export * from "./constants"
export type { Contract } from "web3-eth-contract"
