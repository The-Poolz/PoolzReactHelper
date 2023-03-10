import React from "react"
import Web3 from "web3"
import ThePoolzContext from "./Context"
import ThePoolz from "../poolz/ThePoolz"

const ThePoolzProvider = ({ children }: { children: React.ReactNode }) => {
  const [thePoolzInstance, setThePoolzInstance] = React.useState(new ThePoolz())
  const [provider, setProvider] = React.useState(Web3.givenProvider)

  React.useEffect(() => {
    if (!provider) return

    const init = async () => {
      const instance = new ThePoolz(provider)
      await instance.init()
      setThePoolzInstance(instance)
    }
    init()
    provider
      .on("accountsChanged", init)
      .on("chainChanged", init)


  }, [provider, setThePoolzInstance]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThePoolzContext.Provider value={{ thePoolz: thePoolzInstance, setProvider }}>
      {children}
    </ThePoolzContext.Provider>
  )
}

export default ThePoolzProvider
