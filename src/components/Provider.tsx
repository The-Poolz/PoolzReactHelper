import React, { createContext } from "react"

interface ThePoolzContext {
  thePoolz: string
  setProvider: React.Dispatch<React.SetStateAction<string>>
}

export const Context = createContext<ThePoolzContext>({
  thePoolz: "",
  setProvider: () => { },
})

const ThePoolzProvider = ({ children }: { children: React.ReactNode }) => {
  const [thePoolzInstance, setProvider] = React.useState("")

  return (
    <Context.Provider value={{ thePoolz: thePoolzInstance, setProvider }}>
      {children}
    </Context.Provider>
  )
}

export default ThePoolzProvider
