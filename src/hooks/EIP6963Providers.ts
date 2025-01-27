import { EIP1193Provider, Web3APISpec } from "web3-types"

interface EIP6963ProviderInfo {
  walletId: string
  uuid: string
  name: string
  icon: string
}

export interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo
  provider: EIP1193Provider<Web3APISpec>
}

type EIP6963AnnounceProviderEvent = {
  detail: {
    info: EIP6963ProviderInfo
    provider: EIP1193Provider<Web3APISpec>
  }
}

declare global {
  interface WindowEventMap {
    "eip6963:announceProvider": CustomEvent
  }
}

let providers: EIP6963ProviderDetail[] = []

export const EIP6963Providers = {
  value: () => providers,
  subscribe: (callback: VoidFunction) => {
    function onAnnouncement(event: EIP6963AnnounceProviderEvent) {
      if (providers.map((p) => p.info.uuid).includes(event.detail.info.uuid)) return
      providers = [...providers, event.detail]
      callback()
    }
    window.addEventListener("eip6963:announceProvider", onAnnouncement)
    window.dispatchEvent(new Event("eip6963:requestProvider"))

    return () => window.removeEventListener("eip6963:announceProvider", onAnnouncement)
  }
}
