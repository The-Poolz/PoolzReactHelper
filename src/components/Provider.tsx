import React from "react"
import ThePoolzContext from "./Context"
import ThePoolz from "../poolz/ThePoolz"
import { TChainConfig } from "../types/IThePoolzInterface"

const ThePoolzProvider = ({ children, overrides }: { children: React.ReactNode, overrides?: TChainConfig }) => {
  const [thePoolzInstance, setThePoolzInstance] = React.useState(new ThePoolz(ThePoolz.givenProvider, overrides))
  const [provider, setProvider] = React.useState(ThePoolz.givenProvider)

  const contextValue = React.useMemo(() => ({ thePoolz: thePoolzInstance, setProvider }), [thePoolzInstance, setProvider])

  React.useEffect(() => {
    if (!provider) return

    const init = async () => {
      const instance = new ThePoolz(provider, overrides)
      await instance.init()
      setThePoolzInstance(instance)
    }
    init().catch(console.error)
    provider
      .on("accountsChanged", init)
    provider.on("chainChanged", init)


  }, [provider, setThePoolzInstance]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThePoolzContext.Provider value={contextValue}>
      {children}
    </ThePoolzContext.Provider>
  )
}

export default ThePoolzProvider
