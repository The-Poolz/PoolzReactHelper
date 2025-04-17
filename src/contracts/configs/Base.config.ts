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
    address: "0x9ba7036aa978509714D137bA7f98e8f66872c19F",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0xbB407809BadB136E1db0ddb53478D5a830D83805",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0x83FF82f14920025576Cd04046335c4b748759121",
    nameVersion: "TimedDealProvider@1.0.6"
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
  },
  dispenserProvider: {
    address: "0x6145F338eCf142813a9Cfcf02A9f95cFC300cfb7",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
