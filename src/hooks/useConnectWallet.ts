import { useCallback, useEffect, useState } from "react"
import { useThePoolz } from "./useThePoolz"

export const useConnectWallet = () => {
  const [isWallets, setIsWallets] = useState({ isMetamask: false, isCoinbaseWallet: false })

  const thePoolz = useThePoolz()
  const { web3 } = thePoolz

  const connectMetamask = useCallback(async () => {
    if (!isWallets.isMetamask) return window.open(`https://metamask.app.link/dapp/${window.location.host}`, "_blank", "noreferrer noopener")

    const { providers = [], providerMap, request } = web3.currentProvider
    return providers.length
      ? await providerMap.get("MetaMask").request({ method: "eth_requestAccounts" })
      : await request({ method: "eth_requestAccounts" })
  }, [isWallets.isMetamask, web3])

  const connectCoinbaseWallet = useCallback(async () => {
    if (!isWallets.isCoinbaseWallet) return window.open(`https://www.coinbase.com/wallet`, "_blank", "noreferrer noopener")

    const { providers = [], providerMap, request } = web3.currentProvider
    return providers.length
      ? await providerMap.get("CoinbaseWallet").request({ method: "eth_requestAccounts" })
      : await request({ method: "eth_requestAccounts" })
  }, [isWallets.isCoinbaseWallet, web3])

  useEffect(() => {
    if (!web3 || !("currentProvider" in web3)) return

    const { isMetaMask = false, isCoinbaseWallet = false, providerMap = new Map() } = web3.currentProvider

    setIsWallets((state) => {
      const newState = { ...state }
      newState["isMetamask"] = !!providerMap.get("MetaMask") || isMetaMask
      newState["isCoinbaseWallet"] = !!providerMap.get("CoinbaseWallet") || isCoinbaseWallet
      return newState
    })
  }, [web3])

  return { ...isWallets, connectMetamask, connectCoinbaseWallet }
}
