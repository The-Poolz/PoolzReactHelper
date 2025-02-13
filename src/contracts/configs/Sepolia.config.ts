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
  dispenserProvider: {
    address: "0x78012fc722660E22778af214f3bc560673f37721",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
