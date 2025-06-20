import { useMemo } from "react"
import { WagmiProvider } from "wagmi"
import { QueryClientProvider } from "@tanstack/react-query"
import { useChains } from "@poolzfinance/strapi"

import ThePoolzContext from "./Context"
import type { ProviderProps } from "../types/chain"
import { createWagmiConfig } from "../hooks/useWagmiConfig"
import { validateAndMapChains } from "../utils/chain-mapper"
import React from "react"
import ThePoolz from "../poolz/ThePoolz"
import { queryClient } from "../utils/query-client"
import Web3 from "web3"

const Provider: React.FC<ProviderProps> = ({ children, overrides }) => {
  const [thePoolzInstance, setThePoolzInstance] = React.useState(new ThePoolz(Web3.givenProvider))
  const [provider, setProvider] = React.useState(Web3.givenProvider)

  const contextValue = React.useMemo(() => ({ thePoolz: thePoolzInstance, setProvider }), [thePoolzInstance, setProvider])

  React.useEffect(() => {
    if (!provider) return

    const init = async () => {
      const instance = new ThePoolz(provider, overrides)
      await instance.init()
      setThePoolzInstance(instance)
    }
    init().catch(console.error)
    provider.on("accountsChanged", init).on("chainChanged", init)
  }, [provider, setThePoolzInstance]) // eslint-disable-line react-hooks/exhaustive-deps
  const { data: chainsData, loading } = useChains()

  const chains = useMemo(() => {
    if (!chainsData || loading) return []

    try {
      return validateAndMapChains(chainsData)
    } catch (error) {
      console.error("Failed to validate and map chains:", error)
      return []
    }
  }, [chainsData, loading])

  if (loading) return <div>Loading...</div>
  const wagmiConfig = createWagmiConfig(chains)

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ThePoolzContext.Provider value={contextValue}>{children}</ThePoolzContext.Provider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Provider
