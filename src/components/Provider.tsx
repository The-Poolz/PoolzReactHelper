import React from "react"
import Web3 from "web3"
import ThePoolzContext from "./Context"
import ThePoolz from "../poolz/ThePoolz"
import { IThePoolzInterface } from "../types/IThePoolzInterface"

const initionalState: IThePoolzInterface = {
  account: null,
  chainId: null,
  web3: null
}

const ThePoolzProvider = ({ children }: { children: React.ReactNode }) => {
  const [thePoolzInstance, setThePoolzInstance] = React.useState(initionalState)
  const [provider, setProvider] = React.useState(Web3.givenProvider)

  React.useEffect(() => {
    const init = async () => {
      const instance = new ThePoolz(provider)
      const thePoolz = await instance.init()
      setThePoolzInstance(thePoolz)
    }

    if (provider) {
      init()
      provider
        .on("accountsChanged", init)
        .on("chainChanged", init)
    }
  }, [provider])

  return (
    <ThePoolzContext.Provider value={{ thePoolz: thePoolzInstance, setProvider }}>
      {children}
    </ThePoolzContext.Provider>
  )
}

export default ThePoolzProvider
