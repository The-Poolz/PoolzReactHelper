import React, { useMemo } from "react"
import { WagmiProvider, createConfig, http } from "wagmi"
import { QueryClientProvider } from "@tanstack/react-query"
import { useChains } from "@poolzfinance/strapi"
import { mainnet } from "viem/chains"
import { queryClient } from "../utils/query-client"
import { PoolzAppContext } from "./Context"
import { WALLET_CONNECT_CONFIG } from "../constants/wagmi"
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors"
import { validateAndMapChains } from "../utils/chain-mapper"

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { data: chainsData } = useChains()

  const chains = useMemo(() => {
    if (!chainsData) return []
    try {
      return validateAndMapChains(chainsData)
    } catch {
      return []
    }
  }, [chainsData])

  const chainsForConfig = (chains.length ? chains : [mainnet]) as [typeof mainnet, ...typeof chains]

  const wagmiConfig = useMemo(
    () =>
      createConfig({
        chains: chainsForConfig,
        connectors: [injected(), walletConnect(WALLET_CONNECT_CONFIG), coinbaseWallet({ appName: "Poolz" })],
        transports: Object.fromEntries(chainsForConfig.map((c) => [c.id, http()]))
      }),
    [chainsForConfig]
  )

  return (
    <PoolzAppContext.Provider value={{ chains }}>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
    </PoolzAppContext.Provider>
  )
}

export default Provider
