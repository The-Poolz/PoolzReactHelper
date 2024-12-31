import ThePoolzProvider from "./components/Provider"
import { useThePoolz } from "./hooks/useThePoolz"
import { useConnectWallet } from "./hooks/useConnectWallet"
import { useTheSiwe } from "./hooks/useTheSiwe"
import { useSidNameForAddress } from "./hooks/useSid"

export { ThePoolzProvider, useThePoolz, useConnectWallet, useSidNameForAddress, useTheSiwe }
export type { IThePoolzInterface, IERC20Info, IChainConfig, TChainConfig } from "./types/IThePoolzInterface"
export * from "./utils"
export * from "./constants"
export type { Contract } from "web3-eth-contract"
