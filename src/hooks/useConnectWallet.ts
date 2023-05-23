import { useMemo } from "react"
import { useThePoolz, useSetProvider } from "./useThePoolz"

const initionalState = {
  isMultipleWallets: false,
  isMetaMask: false,
  isCoinbaseWallet: false,
  isTrustWallet: false,
  connectMetamask: () =>
    Promise.resolve(window.open(`https://metamask.app.link/dapp/${window.location.host}`, "_blank", "noreferrer noopener")),
  connectCoinbaseWallet: () => Promise.resolve(window.open(`https://www.coinbase.com/wallet`, "_blank", "noreferrer noopener")),
  connectTrustWallet: () => Promise.resolve(window.open(`https://trustwallet.com/download`, "_blank", "noreferrer noopener"))
}

export const useConnectWallet = () => {
  const setProvider = useSetProvider()
  const thePoolz = useThePoolz()
  const { web3 } = thePoolz

  return useMemo(() => {
    if (!web3) return initionalState

    const { isMetaMask = false, isCoinbaseWallet = false, isTrustWallet = false, providers = [], request } = web3.givenProvider

    if (providers.length) {
      initionalState.isMultipleWallets = true
      for (const provider of providers) {
        const connect = async () => {
          setProvider(provider)
          return await provider.request({ method: "eth_requestAccounts" })
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
