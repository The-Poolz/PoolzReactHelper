import { createConfig, http, type Config } from "wagmi"
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors"
import type { Chain } from "viem/chains"
import { WALLET_CONNECT_CONFIG } from "../constants/wagmi"

export function createWagmiConfig(chains: Chain[]): Config {
  if (chains.length === 0) {
    throw new Error("No chains provided")
  }

  const supportedChains = chains as [Chain, ...Chain[]]

  return createConfig({
    chains: supportedChains,
    connectors: [
      injected(),
      coinbaseWallet({
        appName: WALLET_CONNECT_CONFIG.appName,
        appLogoUrl: WALLET_CONNECT_CONFIG.appLogoUrl
      }),
      walletConnect({
        projectId: WALLET_CONNECT_CONFIG.projectId,
        metadata: {
          name: WALLET_CONNECT_CONFIG.appName,
          description: WALLET_CONNECT_CONFIG.appDescription,
          url: WALLET_CONNECT_CONFIG.appUrl,
          icons: [WALLET_CONNECT_CONFIG.appLogoUrl]
        }
      })
    ],
    transports: supportedChains.reduce((acc, chain) => {
      const rpcUrl = chain.rpcUrls.default.http[0]
      if (rpcUrl) {
        acc[chain.id] = http(rpcUrl)
      }
      return acc
    }, {} as Record<number, ReturnType<typeof http>>)
  })
}
