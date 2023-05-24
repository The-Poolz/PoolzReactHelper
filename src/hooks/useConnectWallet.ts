import { useMemo } from "react"
import { useThePoolz, useSetProvider } from "./useThePoolz"

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
    if (!web3) return initionalState

    type TProvider = {
      isMetaMask?: boolean
      isCoinbaseWallet?: boolean
      isTrustWallet?: boolean
      providers?: TProvider[]
      request({ method }: { method: string }): Promise<Window | null>
    }
    const { isMetaMask = false, isCoinbaseWallet = false, isTrustWallet = false, providers = [], request } = web3.givenProvider as TProvider

    if (providers.length) {
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
