import ThePoolzProvider from "./components/Provider"
import { useThePoolz } from "./hooks/useThePoolz"
import { useConnectWallet } from "./hooks/useConnectWallet"

export { ThePoolzProvider, useThePoolz, useConnectWallet }
export type { IThePoolzInterface, IERC20Info } from "./types/IThePoolzInterface"
export * from "./utils"
export * from "./constants"
