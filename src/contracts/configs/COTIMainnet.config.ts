import type { TChainConfig } from "../../types/IThePoolzInterface"

export const COTIMainnetChainConfig: TChainConfig = {
  chainInfo: {
    name: "COTI Mainnet",
    chain: "COTIMainnet",
    nativeCurrency: {
      name: "COTI",
      symbol: "COTI",
      decimals: 18
    },
    infoURL: "https://coti.io",
    chainId: 2632500,
    explorers: [
      {
        name: "cotiscan",
        url: "https://mainnet.cotiscan.io/",
        standard: "EIP3091"
      }
    ]
  },
  vaultManager: {
    address: "0x7Ff9315f538dF7eC76Ec4815249Dd30519726460",
    nameVersion: "VaultManager@1.0.0"
  },
  lockDealNFT: {
    address: "0x2Bb9cFF524C76eb2eA27bC6cDbB93447115D8dcC",
    nameVersion: "LockDealNFT@1.0.4"
  },
  dealProvider: {
    address: "0x9cfd8c7834Be0DfE41F3FE68C29124066D5Cd13b",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0x756CD0834C2610f583B8324934A0269E3fef6f72",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0x2051f98ca620a4d3E6024f144382d3537452B557",
    nameVersion: "TimedDealProvider@1.0.6"
  },
  dispenserProvider: {
    address: "0x8b58eeaB0e457c0b6CA68dFC3861a4352D6c5CFb",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
