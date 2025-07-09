import type { TChainConfig } from "../../types/IThePoolzInterface"

export const UnichainConfig: TChainConfig = {
  chainInfo: {
    name: "Unichain",
    chain: "Unichain",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    chainId: 130,
    rpc: ["https://unichain-rpc.publicnode.com"],
    explorers: [
      {
        name: "Unichain explorer",
        url: "https://unichain.blockscout.com/",
        standard: "EIP3091"
      }
    ]
  },
  vaultManager: {
    address: "0x7Ff9315f538dF7eC76Ec4815249Dd30519726460",
    nameVersion: "VaultManager@1.0.1"
  },
  lockDealNFT: {
    address: "0xb16BBDf683fFd6D92290F7610bb10f22f9c71e9e",
    nameVersion: "LockDealNFT@1.0.4-a"
  },
  dealProvider: {
    address: "0x6d77B5147CDE6Fa287c1266A33e09a09651D36d0",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0x7521fF2baca97397C8936E35dAc225f6bc1070Cf",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0xA2A0bEEfda596Fdb321240dD283D8cBf65b252f1",
    nameVersion: "TimedDealProvider@1.0.6"
  },
  dispenserProvider: {
    address: "0x960c76BeC76ebB223B3e29B35a70c40925f38d66",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
