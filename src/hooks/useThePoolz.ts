import { useContext, useEffect } from "react"
import ThePoolzContext from "../components/Context"
import { RequiredContract } from "../types/IThePoolzInterface"

export const useSetProvider = () => {
  const { setProvider } = useContext(ThePoolzContext)
  return setProvider
}
export const useThePoolz = (requiredContracts?: RequiredContract[]) => {
  const { thePoolz, setRequiredContracts } = useContext(ThePoolzContext)

  useEffect(() => {
    if (!requiredContracts) return
    setRequiredContracts(requiredContracts)
  }, [requiredContracts])

  return thePoolz
}
