import ThePoolzProvider from "./components/Provider"
import { useThePoolz, useSetProvider } from "./hooks/useThePoolz"
import { useConnectWallet } from "./hooks/useConnectWallet"
import { useTheSiwe } from "./hooks/useTheSiwe"
import { useSidNameForAddress } from "./hooks/useSid"

export { ThePoolzProvider, useThePoolz, useSetProvider, useConnectWallet, useSidNameForAddress, useTheSiwe }
export type { IThePoolzInterface, IERC20Info } from "./types/IThePoolzInterface"
export * from "./utils"
export * from "./constants"
export type { Contract } from "web3"
