import type { TChainConfig } from "../../types/IThePoolzInterface"

export const COTIDevnetChainConfig: TChainConfig = {
  chainInfo: {
    name: "COTI Devnet",
    chain: "COTIDevnet",
    nativeCurrency: {
      name: "COTI2",
      symbol: "COTI2",
      decimals: 18
    },
    infoURL: "https://devnet.coti.io",
    chainId: 13068200,
    explorers: [
      {
        name: "cotiscan",
        url: "https://explorer-devnet.coti.io/",
        standard: "EIP3091"
      }
    ]
  },
  vaultManager: {
    address: "0xc82633b2c0DAc7e58be68B264399bd6278407688",
    nameVersion: "VaultManager@1.0.0"
  },
  lockDealNFT: {
    address: "0x25E66861ADC9BBA4e539da90EbFb9c8cd0326EF2",
    nameVersion: "LockDealNFT@1.0.4"
  },
  dealProvider: {
    address: "0x5a1a36821E86bC4a7c9cDAE8DF5C72956B846a6D",
    nameVersion: "DealProvider@1.0.4"
  },
  lockDealProvider: {
    address: "0x3043a752fA09B63ECbA44547af6047Bd343cbd3E",
    nameVersion: "LockDealProvider@1.0.4"
  },
  timedDealProvider: {
    address: "0x73b8893E877360526B6Fc9D67DD7e3ce675F6a32",
    nameVersion: "TimedDealProvider@1.0.4"
  },
  collateralProvider: {
    address: "0xB665d8888D29E51393aBBB8d3B58B62ff59dD8Df",
    nameVersion: "CollateralProvider@1.0.2"
  },
  refundProvider: {
    address: "0x7B91e76C9190E4daC50fA89E032375B0E35E22D5",
    nameVersion: "RefundProvider@1.0.2"
  },
  simpleBuilder: {
    address: "0x4Fc800ca9e30f540238538555B4f759DeDCE7dBa",
    nameVersion: "SimpleBuilder@1.2.2"
  },
  simpleRefundBuilder: {
    address: "0x9c801e41dB904657e6ad63295FA8a5Ef32f1E789",
    nameVersion: "SimpleRefundBuilder@1.2.2"
  }
}
