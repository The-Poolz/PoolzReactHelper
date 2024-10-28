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
  },
  vaultManager: {
    address: "0x9c8F78E0aeAB8190c9d1DF7BEd0B26c1EDcB8DE6",
    nameVersion: "VaultManager@1.0.0"
  },
  lockDealNFT: {
    address: "0xA2A0bEEfda596Fdb321240dD283D8cBf65b252f1",
    nameVersion: "LockDealNFT@1.0.4"
  },
  dealProvider: {
    address: "0x65f62efEb1A43064081443791d8C10Db0A1FB511",
    nameVersion: "DealProvider@1.0.4"
  },
  lockDealProvider: {
    address: "0x960c76BeC76ebB223B3e29B35a70c40925f38d66",
    nameVersion: "LockDealProvider@1.0.4"
  },
  timedDealProvider: {
    address: "0x2dd5B5E374B2d32152507100a42CA15f7707F504",
    nameVersion: "TimedDealProvider@1.0.4"
  },
  simpleBuilder: {
    address: "0x756CD0834C2610f583B8324934A0269E3fef6f72",
    nameVersion: "SimpleBuilder@1.2.2"
  },
  collateralProvider: {
    address: "0x9cfd8c7834Be0DfE41F3FE68C29124066D5Cd13b",
    nameVersion: "CollateralProvider@1.0.2"
  },
  refundProvider: {
    address: "0xEE099538ED077F831cB9Af44fFD51Ec7Fd95c7DE",
    nameVersion: "RefundProvider@1.0.2"
  },
  simpleRefundBuilder: {
    address: "0xff1f0872f5462b30acdA92a08D2388612F7Bf7EE",
    nameVersion: "SimpleRefundBuilder@1.2.2"
  }
}
