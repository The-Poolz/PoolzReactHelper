import type { Chain } from "viem/chains"
import type { ApiChain } from "../types/chain"

export function mapApiChainToViemChain(apiChain: ApiChain): Chain {
  if (!apiChain.chainId || !apiChain.name) {
    throw new Error(`Invalid chain data: missing chainId or name`)
  }

  const rpcUrl = apiChain.contracts_on_chain?.RPC ?? ""

  return {
    id: apiChain.chainId,
    name: apiChain.name,
    nativeCurrency: {
      name: apiChain.name,
      symbol: apiChain.symbol || "ETH",
      decimals: apiChain.contracts_on_chain?.Decimals || 18,
    },
    rpcUrls: {
      default: { http: [rpcUrl] },
    },
    blockExplorers: apiChain.contracts_on_chain?.Explorer
      ? {
          default: {
            name: `${apiChain.name} Explorer`,
            url: apiChain.contracts_on_chain.Explorer,
          },
        }
      : undefined,
    testnet: apiChain.isTest,
  }
}

export function validateAndMapChains(chainsData: unknown): Chain[] {
  if (!chainsData || typeof chainsData !== "object") {
    throw new Error("Invalid chains data received")
  }

  const data = chainsData as { chains?: ApiChain[] }

  if (!Array.isArray(data.chains) || data.chains.length === 0) {
    throw new Error("No valid chains found")
  }

  return data.chains.map(mapApiChainToViemChain)
}
