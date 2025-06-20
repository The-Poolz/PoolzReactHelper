import { useConnect, useAccount } from "wagmi"

export const useConnectWallet = () => {
  const { connect, connectors, isPending } = useConnect()
  const { isConnected, address } = useAccount()

  const metamaskConnector = connectors.find((c) => c.name.toLowerCase().includes("meta"))
  const coinbaseConnector = connectors.find((c) => c.name.toLowerCase().includes("coinbase"))
  const walletConnectConnector = connectors.find((c) => c.name.toLowerCase().includes("walletconnect"))

  return {
    isConnected,
    address,
    isPending,
    connectMetamask: metamaskConnector ? () => connect({ connector: metamaskConnector }) : undefined,
    connectCoinbaseWallet: coinbaseConnector ? () => connect({ connector: coinbaseConnector }) : undefined,
    connectWalletConnect: walletConnectConnector ? () => connect({ connector: walletConnectConnector }) : undefined,
    connectors,
    connect
  }
}
