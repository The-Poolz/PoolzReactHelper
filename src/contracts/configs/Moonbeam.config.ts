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
    address: "0x3c845DbB07BdFdD73FbC5Df4bA47EdeA20BCa489",
    nameVersion: "DealProvider@1.0.4"
  },
  lockDealProvider: {
    address: "0x7521fF2baca97397C8936E35dAc225f6bc1070Cf",
    nameVersion: "LockDealProvider@1.0.4"
  },
  timedDealProvider: {
    address: "0x9c8F78E0aeAB8190c9d1DF7BEd0B26c1EDcB8DE6",
    nameVersion: "TimedDealProvider@1.0.4"
  },
  simpleBuilder: {
    address: "0xA2A0bEEfda596Fdb321240dD283D8cBf65b252f1",
    nameVersion: "SimpleBuilder@1.2.2"
  }
}
