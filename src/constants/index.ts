import type { TChainConfig } from "../types/IThePoolzInterface"
import { EthMainChainConfig } from "../contracts/configs/Eth.config"
import { ArbitrumOneChainConfig } from "../contracts/configs/ArbitrumOne.config"
import { AvalancheChainConfig } from "../contracts/configs/Avalanche.config"
import { BinanceTestChainConfig } from "../contracts/configs/BinanceTest.config"
import { BinanceMainChainConfig } from "../contracts/configs/BinanceMain.config"
import { MaticMainChainConfig } from "../contracts/configs/MaticMain.config"
import { NeonChainConfig } from "../contracts/configs/Neon.config"
import { TomoChainConfig } from "../contracts/configs/Tomo.config"
import { TelosMainChainConfig } from "../contracts/configs/TelosMain.config"
import { MantaTestChainConfig } from "../contracts/configs/MantaTest.config"

export const DEFAULT_CHAIN_ID = 1
export const UINT_MINUS_ONE = "115792089237316195423570985008687907853269984665640564039457584007913129639935"

export const AVAILABLE_CHAINS = new Map<number, TChainConfig>()
AVAILABLE_CHAINS.set(1, EthMainChainConfig)
AVAILABLE_CHAINS.set(56, BinanceMainChainConfig)
AVAILABLE_CHAINS.set(88, TomoChainConfig)
AVAILABLE_CHAINS.set(97, BinanceTestChainConfig)
AVAILABLE_CHAINS.set(137, MaticMainChainConfig)
AVAILABLE_CHAINS.set(42161, ArbitrumOneChainConfig)
AVAILABLE_CHAINS.set(43114, AvalancheChainConfig)
AVAILABLE_CHAINS.set(245022934, NeonChainConfig)
AVAILABLE_CHAINS.set(40, TelosMainChainConfig)
AVAILABLE_CHAINS.set(3441005, MantaTestChainConfig)

export const CUSTOMER_ACCOUNT_VARIABLE = "__CUSTOMER_ACCOUNT__"
