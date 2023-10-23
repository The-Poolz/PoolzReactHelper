import ThePoolzProvider from "./components/Provider"
import { useThePoolz } from "./hooks/useThePoolz"
import { useConnectWallet } from "./hooks/useConnectWallet"
import { useSiwe } from "./hooks/useSiwe"
import { useSidNameForAddress } from "./hooks/useSid"

export { ThePoolzProvider, useThePoolz, useConnectWallet, useSiwe, useSidNameForAddress }
export type { IThePoolzInterface, IERC20Info } from "./types/IThePoolzInterface"
export * from "./utils"
export * from "./constants"
export type { Contract } from "web3-eth-contract"
