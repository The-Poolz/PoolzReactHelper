import type { TChainConfig } from "../types/IThePoolzInterface"
import { AVAILABLE_CHAINS } from "../constants"

export const getAvailableNets = <T extends keyof TChainConfig>(contract: T) => {
  return [...AVAILABLE_CHAINS].filter(([, chainConfig]) => chainConfig[contract]).map(([chainNumber]) => chainNumber)
}
