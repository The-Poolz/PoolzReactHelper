import { useContext } from "react"
import ThePoolzContext from "../components/Context"
import { RequiredContract } from "../types/IThePoolzInterface"

export const useSetProvider = () => {
  const { setProvider } = useContext(ThePoolzContext)
  return setProvider
}
export const useThePoolz = (requiredContracts: RequiredContract[]) => {
  const { thePoolz, setRequiredContracts } = useContext(ThePoolzContext)
  setRequiredContracts(requiredContracts)
  return thePoolz
}
