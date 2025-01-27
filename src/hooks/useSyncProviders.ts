import { useSyncExternalStore } from "react"
import { EIP6963Providers } from "./EIP6963Providers"

export const useSyncProviders = () =>
  useSyncExternalStore(EIP6963Providers.subscribe, EIP6963Providers.value, EIP6963Providers.value)
