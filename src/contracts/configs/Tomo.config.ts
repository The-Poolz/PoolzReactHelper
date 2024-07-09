import type { TChainConfig } from "../../types/IThePoolzInterface"

export const TomoChainConfig: TChainConfig = {
  chainInfo: {
    name: "Viction",
    chain: "Viction",
    chainId: 88,
    nativeCurrency: {
      name: "Viction",
      symbol: "VIC",
      decimals: 18
    },
    infoURL: "https://viction.xyz",
    rpc: [
      "https://rpc.viction.xyz"
    ],
    explorers: [
      {
        name: "viction",
        url: "https://tomoscan.io/",
        standard: "EIP3091"
      }
    ]
  },
  lockedDealV2: {
    address: "0x7Ff9315f538dF7eC76Ec4815249Dd30519726460",
    nameVersion: "LockedDeal@2.3.3"
  }
}
