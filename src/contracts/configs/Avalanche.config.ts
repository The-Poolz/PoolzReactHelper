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
    address: "0xa562824D34E555f16544B23305C6CD778B17993c",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0xB1Ecee4191daaD9381DD38A545b31DDcDba7A9A9",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0x25ea5cf98A46dbaBefd042B6cEebc501b659be78",
    nameVersion: "TimedDealProvider@1.0.6"
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
  },
  multiSenderV2: {
    address: "0x1E947Ec4F6B74c746F13604438cE1A3026f30553",
    nameVersion: "MultiSenderV2@2.1.0"
  },
  dispenserProvider: {
    address: "0x655a8bc3875aedb2A4bc4aeeF5F84805207cB5DC",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
