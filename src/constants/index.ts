import type { TChainConfig } from "../types/IThePoolzInterface"
import { EthMainChainConfig } from "../contracts/configs/Eth.config"
import { ArbitrumOneChainConfig } from "../contracts/configs/ArbitrumOne.config"
import { AvalancheChainConfig } from "../contracts/configs/Avalanche.config"

export const DEFAULT_CHAIN_ID = 1
export const UINT_MINUS_ONE = "115792089237316195423570985008687907853269984665640564039457584007913129639935"

export const AVAILABLE_CHAINS = new Map<number, TChainConfig>()
AVAILABLE_CHAINS.set(1, EthMainChainConfig)
AVAILABLE_CHAINS.set(42161, ArbitrumOneChainConfig)
AVAILABLE_CHAINS.set(43114, AvalancheChainConfig)
