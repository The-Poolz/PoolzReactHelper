import { useContext } from "react"
import ThePoolzContext from "../components/Context"

export const useSetProvider = () => {
  const { setProvider } = useContext(ThePoolzContext)
  return setProvider
}
export const useThePoolz = () => {
  const { thePoolz } = useContext(ThePoolzContext)
  return thePoolz
}
