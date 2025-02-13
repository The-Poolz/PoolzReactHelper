import type { TChainConfig } from "../../types/IThePoolzInterface"

export const SepoliaTestChainConfig: TChainConfig = {
  chainInfo: {
    name: "Sepolia",
    chainId: 11155111,
    chain: "ETH",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    explorers: [
      {
        name: "Sepolia Testnet Explorer",
        url: "https://sepolia.etherscan.io/",
        standard: "EIP3091"
      }
    ],
    infoURL: "https://sepolia.etherscan.io"
  },
  dispenserAddress: "0x7352116Fc2C7E7FF172D9E7dA2F31250E537ACcb",

  lockedDealV2: {
    address: "0x7Ff9315f538dF7eC76Ec4815249Dd30519726460",
    nameVersion: "LockedDeal@2.3.3"
  },
  multiSenderV2: {
    address: "0x25ea5cf98a46dbabefd042b6ceebc501b659be78",
    nameVersion: "MultiSenderV2@2.1.0"
  },
  lockDealNFT: {
    address: "0x25E66861ADC9BBA4e539da90EbFb9c8cd0326EF2",
    nameVersion: "LockDealNFT@1.0.4"
  },
  vaultManager: {
    address: "0x011c8888C96fd3c1C1c43749ED581D17DE17F42C",
    nameVersion: "VaultManager@1.0.0"
  },
  dealProvider: {
    address: "0x4Fc800ca9e30f540238538555B4f759DeDCE7dBa",
    nameVersion: "DealProvider@1.0.4"
  },
  lockDealProvider: {
    address: "0x66d2111Eef097804dEc06e4F6FD23CA5e3BA5695",
    nameVersion: "LockDealProvider@1.0.4"
  },
  timedDealProvider: {
    address: "0x9c801e41dB904657e6ad63295FA8a5Ef32f1E789",
    nameVersion: "TimedDealProvider@1.0.4"
  },
  collateralProvider: {
    address: "0x2051f98ca620a4d3e6024f144382d3537452b557",
    nameVersion: "CollateralProvider@0.9.6"
  },
  refundProvider: {
    address: "0xaa40d75fc2cdafc61a7c52ac207e17d694102ef2",
    nameVersion: "RefundProvider@0.9.6"
  },
  simpleBuilder: {
    address: "0x8b58eeab0e457c0b6ca68dfc3861a4352d6c5cfb",
    nameVersion: "SimpleBuilder@0.9.1-ironblocks"
  },
  simpleRefundBuilder: {
    address: "0x120893ab6f67171d4e6b0e72c151ab96aebe44e4",
    nameVersion: "SimpleRefundBuilder@0.9.5"
  },
  dispenserProvider: {
    address: "0x78012fc722660E22778af214f3bc560673f37721",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
