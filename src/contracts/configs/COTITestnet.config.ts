import type { TChainConfig } from "../../types/IThePoolzInterface"

export const COTITestnetChainConfig: TChainConfig = {
  chainInfo: {
    name: "COTI Testnet",
    chain: "COTITestnet",
    nativeCurrency: {
      name: "COTI",
      symbol: "COTI",
      decimals: 18
    },
    infoURL: "https://testnet.coti.io",
    chainId: 7082400,
    explorers: [
      {
        name: "cotiscan",
        url: "https://testnet.cotiscan.io/",
        standard: "EIP3091"
      }
    ]
  },
  vaultManager: {
    address: "0x3A3717a198f0b69155D666D61984e3BBeD084C48",
    nameVersion: "VaultManager@1.0.0"
  },
  lockDealNFT: {
    address: "0x398cc8B9d891fFEFA0E82EB0fb3845c19C887451",
    nameVersion: "LockDealNFT@1.0.4"
  },
  dealProvider: {
    address: "0x8169b222ECeb16beF40cF94Ba0d50678d706F6D0",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0x66a550610d38Fd4964635b6bf6828f4CF75Ab42A",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0x29552d4fa4e2ecF802a2dcf6fA5513386a4BCCBb",
    nameVersion: "TimedDealProvider@1.0.6"
  },
  simpleBuilder: {
    address: "0x75E8144D24274e8c881B844B2F40a2C610885CE9",
    nameVersion: "SimpleBuilder@1.2.2"
  },
  dispenserProvider: {
    address: "0x0D8c24f2D33864D82ddBCb64D15D8EDA635db0d0",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
