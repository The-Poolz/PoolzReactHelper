import { createContext, useContext } from "react"

const ThePoolzContext = createContext<any>(null as any)

export const PoolzAppContext = createContext<{ chains: any[] }>({ chains: [] })
export const usePoolzApp = () => useContext(PoolzAppContext)

export default ThePoolzContext
