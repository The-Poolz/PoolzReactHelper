import { useMemo } from "react"
import { useThePoolz, useSetProvider } from "./useThePoolz"
import { TGivenProvider } from "../types/TConnectWallet"

const initionalState = {
  isMultipleWallets: false,
  isMetaMask: false,
  isCoinbaseWallet: false,
  isTrustWallet: false,
  connectMetamask: async () => window.open(`https://metamask.app.link/dapp/${window.location.host}`, "_blank", "noreferrer noopener"),
  connectCoinbaseWallet: async () => window.open(`https://www.coinbase.com/wallet`, "_blank", "noreferrer noopener"),
  connectTrustWallet: async () => window.open(`https://trustwallet.com/download`, "_blank", "noreferrer noopener")
}

export const useConnectWallet = () => {
  const setProvider = useSetProvider()
  const thePoolz = useThePoolz()
  const { web3 } = thePoolz

  return useMemo(() => {
    const { isMetaMask, isCoinbaseWallet, isTrustWallet, providers, request } = (web3.givenProvider || {
      isMetaMask: false,
      isCoinbaseWallet: false,
      isTrustWallet: false,
      providers: [],
      request: Promise.resolve
    }) as TGivenProvider

    if (Array.isArray(providers) && providers.length) {
      initionalState.isMultipleWallets = true
      for (const provider of providers) {
        const connect = async () => {
          setProvider(provider)
          return provider.request({ method: "eth_requestAccounts" })
        }
        if (provider.isMetaMask) {
          initionalState.isMetaMask = true
          initionalState.connectMetamask = connect
          continue
        }
        if (provider.isCoinbaseWallet) {
          initionalState.isCoinbaseWallet = true
          initionalState.connectCoinbaseWallet = connect
        }
      }
      return initionalState
    }
    const connect = async () => await request({ method: "eth_requestAccounts" })

    if (isMetaMask) initionalState.connectMetamask = connect
    if (isCoinbaseWallet) initionalState.connectCoinbaseWallet = connect
    if (isTrustWallet) initionalState.connectTrustWallet = connect

    return { ...initionalState, isMetaMask, isCoinbaseWallet, isTrustWallet }
  }, [web3, setProvider])
}
