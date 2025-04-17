import type { TChainConfig } from "../../types/IThePoolzInterface"

export const ArbitrumOneChainConfig: TChainConfig = {
  chainInfo: {
    name: "Arbitrum One",
    chainId: 42161,
    chain: "ETH",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    explorers: [
      {
        name: "Arbiscan",
        url: "https://arbiscan.io",
        standard: "EIP3091"
      },
      {
        name: "Arbitrum Explorer",
        url: "https://explorer.arbitrum.io",
        standard: "EIP3091"
      },
      {
        name: "dexguru",
        url: "https://arbitrum.dex.guru",
        icon: "dexguru",
        standard: "EIP3091"
      }
    ],
    infoURL: "https://arbitrum.io",
  },
  lockedDealV2: {
    address: "0x7Ff9315f538dF7eC76Ec4815249Dd30519726460",
    nameVersion: "LockedDeal@2.3.3"
  },
  multiSenderV2: {
    address: "0x25ea5cf98a46dbabefd042b6ceebc501b659be78",
    nameVersion: "MultiSenderV2@2.1.0"
  },
  // delayVault: { address: "0x7521fF2baca97397C8936E35dAc225f6bc1070Cf", nameVersion: "DelayVault@1.2.2" }
  lockDealNFT: {
    address: "0xee099538ed077f831cb9af44ffd51ec7fd95c7de",
    nameVersion: "LockDealNFT@0.9.1-ironblocks"
  },
  vaultManager: {
    address: "0x9cfd8c7834be0dfe41f3fe68c29124066d5cd13b",
    nameVersion: "VaultManager@0.0.4-ironblocks"
  },
  dealProvider: {
    address: "0x9C218bBCdae2dD2B85f08b0a3a7D31a6e6E6bffd",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0xB0841e6FD7d51D5148ABcc19EB24c7E361fDa8c0",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0xF0Bd7c3D038FF9F67Fc64903A3EAC82600Dd37D0",
    nameVersion: "TimedDealProvider@1.0.6"
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
    address: "0x62BD0CF6B93De01a518975B0b117c886c1F1d973",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
