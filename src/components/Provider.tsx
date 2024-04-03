import React from "react"
import Web3 from "web3"
import ThePoolzContext from "./Context"
import ThePoolz from "../poolz/ThePoolz"
import { ChainOverrides } from "../types/IThePoolzInterface"

const ThePoolzProvider = ({ children, overrides }: { children: React.ReactNode, overrides?: ChainOverrides }) => {
  const [thePoolzInstance, setThePoolzInstance] = React.useState(new ThePoolz(Web3.givenProvider))
  const [provider, setProvider] = React.useState(Web3.givenProvider)

  const contextValue = React.useMemo(() => ({ thePoolz: thePoolzInstance, setProvider }), [thePoolzInstance, setProvider])

  React.useEffect(() => {
    if (!provider) return

    const init = async () => {
      const instance = new ThePoolz(provider)
      await instance.init(overrides)
      setThePoolzInstance(instance)
    }
    init().catch(console.error)
    provider
      .on("accountsChanged", init)
      .on("chainChanged", init)


  }, [provider, setThePoolzInstance]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThePoolzContext.Provider value={contextValue}>
      {children}
    </ThePoolzContext.Provider>
  )
}

export default ThePoolzProvider
