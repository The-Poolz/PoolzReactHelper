import type { TChainConfig } from "../../types/IThePoolzInterface"

export const AvalancheChainConfig: TChainConfig = {
  chainInfo: {
    name: "Avalanche C-Chain",
    chain: "AVAX",
    chainId: 43114,
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18
    },
    infoURL: "https://www.avax.network/",
    explorers: [
      {
        name: "snowtrace",
        url: "https://snowtrace.io",
        standard: "EIP3091"
      }
    ]
  },
  lockedDealV2: {
    address: "0xb16bbdf683ffd6d92290f7610bb10f22f9c71e9e",
    nameVersion: "LockedDeal@2.3.3"
  }
}
