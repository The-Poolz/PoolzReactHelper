import { createContext } from "react"
import { IThePoolzContextInterface } from "../types/IThePoolzInterface"

const ThePoolzContext = createContext<IThePoolzContextInterface>(null as any)

export default ThePoolzContext
