import type { TChainConfig } from "../../types/IThePoolzInterface"

export const MantaTestChainConfig: TChainConfig = {
  chainInfo: {
    name: "Manta Pacific Testnet",
    chain: "Manta Pacific",
    chainId: 3441005,
    nativeCurrency: {
      name: "Manta",
      symbol: "MANTA",
      decimals: 18
    },
    infoURL: "https://manta-testnet.caldera.dev/",
    rpc: [
      "https://manta-testnet.calderachain.xyz/http",
      "https://manta-pacific-testnet.drpc.org",
      "wss://manta-pacific-testnet.drpc.org"
    ],
    explorers: [
      {
        name: "manta-testnet Explorer",
        url: "https://manta-testnet.calderaexplorer.xyz",
        standard: "EIP3091"
      }
    ]
  },
  lockDealNFT: {
    address: "0x011c8888C96fd3c1C1c43749ED581D17DE17F42C",
    nameVersion: "LockDealNFT@0.9.1-ironblocks"
  },
  vaultManager: {
    address: "0xc82633b2c0DAc7e58be68B264399bd6278407688",
    nameVersion: "VaultManager@0.0.4-ironblocks"
  },
  dealProvider: {
    address: "0x25E66861ADC9BBA4e539da90EbFb9c8cd0326EF2",
    nameVersion: "DealProvider@0.9.1-ironblocks"
  },
  lockDealProvider: {
    address: "0x06985B5B1B45F803f3054a93022C8c8824085f2e",
    nameVersion: "LockDealProvider@0.9.1-ironblocks"
  },
  timedDealProvider: {
    address: "0x5a1a36821E86bC4a7c9cDAE8DF5C72956B846a6D",
    nameVersion: "TimedDealProvider@0.9.1-ironblocks"
  },
  collateralProvider: {
    address: "0x600fAa264ba2F16bcFd2d3E67882715B21936324",
    nameVersion: "CollateralProvider@0.9.6"
  },
  refundProvider: {
    address: "0x3043a752fA09B63ECbA44547af6047Bd343cbd3E",
    nameVersion: "RefundProvider@0.9.6"
  },
  simpleBuilder: {
    address: "0x73b8893E877360526B6Fc9D67DD7e3ce675F6a32",
    nameVersion: "SimpleBuilder@0.9.1-ironblocks"
  },
  simpleRefundBuilder: {
    address: "0xB95c73B254Ead4624bC19ea40AA1538425e0Ff87",
    nameVersion: "SimpleRefundBuilder@0.9.5"
  }
}
