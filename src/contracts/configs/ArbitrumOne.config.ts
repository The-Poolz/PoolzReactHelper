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
    rpc: ["https://arbitrum-one.publicnode.com"],
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
    address: "0x756cd0834c2610f583b8324934a0269e3fef6f72",
    nameVersion: "DealProvider@0.9.1-ironblocks"
  },
  lockDealProvider: {
    address: "0xff1f0872f5462b30acda92a08d2388612f7bf7ee",
    nameVersion: "LockDealProvider@0.9.1-ironblocks"
  },
  timedDealProvider: {
    address: "0xf027b2d8ea77fca82d8b2b90d2e6705bb398c855",
    nameVersion: "TimedDealProvider@0.9.1-ironblocks"
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
  }
}
