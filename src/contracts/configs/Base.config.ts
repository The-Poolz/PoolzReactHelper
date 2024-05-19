import type { TChainConfig } from "../../types/IThePoolzInterface"

export const BaseChainConfig: TChainConfig = {
  chainInfo: {
    name: "Base",
    chain: "ETH",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    chainId: 8453,
    infoURL: "https://base.org",
    explorers: [
      {
        name: "basescan",
        url: "https://basescan.org",
        standard: "none"
      },
      {
        name: "basescout",
        url: "https://base.blockscout.com",
        icon: "blockscout",
        standard: "EIP3091"
      },
      {
        name: "dexguru",
        url: "https://base.dex.guru",
        icon: "dexguru",
        standard: "EIP3091"
      }
    ]
  },
  lockDealNFT: {
    address: "0xb16BBDf683fFd6D92290F7610bb10f22f9c71e9e",
    nameVersion: "LockDealNFT@0.9.1-ironblocks"
  },
  vaultManager: {
    address: "0x7ff9315f538df7ec76ec4815249dd30519726460",
    nameVersion: "VaultManager@0.0.4-ironblocks"
  },
  dealProvider: {
    address: "0x2Bb9cFF524C76eb2eA27bC6cDbB93447115D8dcC",
    nameVersion: "DealProvider@0.9.1-ironblocks"
  },
  lockDealProvider: {
    address: "0x6d77B5147CDE6Fa287c1266A33e09a09651D36d0",
    nameVersion: "LockDealProvider@0.9.1-ironblocks"
  },
  timedDealProvider: {
    address: "0x3c845DbB07BdFdD73FbC5Df4bA47EdeA20BCa489",
    nameVersion: "TimedDealProvider@0.9.1-ironblocks"
  },
  collateralProvider: {
    address: "0x7521fF2baca97397C8936E35dAc225f6bc1070Cf",
    nameVersion: "CollateralProvider@0.9.6"
  },
  refundProvider: {
    address: "0x9c8F78E0aeAB8190c9d1DF7BEd0B26c1EDcB8DE6",
    nameVersion: "RefundProvider@0.9.6"
  },
  simpleBuilder: {
    address: "0xA2A0bEEfda596Fdb321240dD283D8cBf65b252f1",
    nameVersion: "SimpleBuilder@0.9.1-ironblocks"
  },
  simpleRefundBuilder: {
    address: "0x65f62efEb1A43064081443791d8C10Db0A1FB511",
    nameVersion: "SimpleRefundBuilder@0.9.5"
  },
  multiSenderV2: {
    address: "0x120893ab6f67171d4e6b0e72c151ab96aebe44e4",
    nameVersion: "MultiSenderV2@2.1.0"
  }
}
