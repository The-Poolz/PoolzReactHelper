import type { TChainConfig } from "../../types/IThePoolzInterface"

export const MoonbeamChainConfig: TChainConfig = {
  chainInfo: {
    name: "Moonbeam",
    chain: "MOON",
    nativeCurrency: {
      name: "Glimmer",
      symbol: "GLMR",
      decimals: 18
    },
    infoURL: "https://moonbeam.network/networks/moonbeam",
    chainId: 1284,
    explorers: [
      {
        name: "moonscan",
        url: "https://moonbeam.moonscan.io",
        standard: "EIP3091"
      }
    ]
  },
  vaultManager: {
    address: "0x2Bb9cFF524C76eb2eA27bC6cDbB93447115D8dcC",
    nameVersion: "VaultManager@1.0.0"
  },
  lockDealNFT: {
    address: "0x6d77B5147CDE6Fa287c1266A33e09a09651D36d0",
    nameVersion: "LockDealNFT@1.0.4"
  },
  dealProvider: {
    address: "0xfB98B82D02C5E5241193Cab39956654A555F9A15",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0x1E947Ec4F6B74c746F13604438cE1A3026f30553",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0x57cbaC84d9345eDd42a0CA31e50bda301268cD7d",
    nameVersion: "TimedDealProvider@1.0.6"
  },
  simpleBuilder: {
    address: "0xA2A0bEEfda596Fdb321240dD283D8cBf65b252f1",
    nameVersion: "SimpleBuilder@1.2.2"
  },
  dispenserProvider: {
    address: "0xa562824D34E555f16544B23305C6CD778B17993c",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
