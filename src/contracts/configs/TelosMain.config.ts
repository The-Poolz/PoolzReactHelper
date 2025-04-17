import type { TChainConfig } from "../../types/IThePoolzInterface"

export const TelosMainChainConfig: TChainConfig = {
  chainInfo: {
    name: "Telos EVM Mainnet",
    chain: "TLOS",
    nativeCurrency: {
      name: "Telos",
      symbol: "TLOS",
      decimals: 18
    },
    infoURL: "https://telos.net",
    chainId: 40,
    explorers: [
      {
        name: "teloscan",
        url: "https://teloscan.io",
        standard: "EIP3091"
      }
    ]
  },
  whiteListAddress: "0xb16BBDf683fFd6D92290F7610bb10f22f9c71e9e",
  lockDealNFT: {
    address: "0x6d77B5147CDE6Fa287c1266A33e09a09651D36d0",
    nameVersion: "LockDealNFT@0.9.1"
  },
  vaultManager: {
    address: "0x2Bb9cFF524C76eb2eA27bC6cDbB93447115D8dcC",
    nameVersion: "VaultManager@0.0.4"
  },
  dealProvider: {
    address: "0xEE099538ED077F831cB9Af44fFD51Ec7Fd95c7DE",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0xff1f0872f5462b30acdA92a08D2388612F7Bf7EE",
    nameVersion: "LockDealProvider@1.0.6"
  },
  collateralProvider: {
    address: "0xA2A0bEEfda596Fdb321240dD283D8cBf65b252f1",
    nameVersion: "CollateralProvider@0.9.1"
  },
  refundProvider: {
    address: "0x65f62efEb1A43064081443791d8C10Db0A1FB511",
    nameVersion: "RefundProvider@0.9.1"
  },
  simpleBuilder: {
    address: "0x960c76BeC76ebB223B3e29B35a70c40925f38d66",
    nameVersion: "SimpleBuilder@0.9.0"
  },
  simpleRefundBuilder: {
    address: "0x2dd5B5E374B2d32152507100a42CA15f7707F504",
    nameVersion: "SimpleRefundBuilder@0.9.0"
  },
  multiSenderV2: {
    address: "0x9cfd8c7834Be0DfE41F3FE68C29124066D5Cd13b",
    nameVersion: "MultiSenderV2@2.1.0"
  },
  timedDealProvider: {
    address: "0x2051f98ca620a4d3E6024f144382d3537452B557",
    nameVersion: "TimedDealProvider@1.0.6"
  },
  dispenserProvider: {
    address: "0xaA40d75Fc2CdAFC61A7c52Ac207e17d694102ef2",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
