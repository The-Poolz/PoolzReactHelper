import type React from "react"
import { TChainConfig } from "./IThePoolzInterface"

export interface ApiChain {
  chainId: number
  name: string
  symbol: string
  isTest: boolean
  contracts_on_chain?: {
    Decimals?: number
    RPC?: string
    Explorer?: string
  }
}

export interface ChainsResponse {
  chains: ApiChain[]
}

export interface ProviderProps {
  children: React.ReactNode
  overrides?: TChainConfig
}
