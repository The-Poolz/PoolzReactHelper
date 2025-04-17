import type { TChainConfig } from "../../types/IThePoolzInterface"

export const MantaChainConfig: TChainConfig = {
  chainInfo: {
    name: "Manta Pacific Mainnet",
    chain: "Manta Pacific",
    chainId: 169,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    infoURL: "https://pacific-info.manta.network",
    explorers: [
      {
        name: "manta-pacific Explorer",
        url: "https://pacific-explorer.manta.network",
        standard: "EIP3091"
      }
    ]
  },
  lockDealNFT: {
    address: "0xb16BBDf683fFd6D92290F7610bb10f22f9c71e9e",
    nameVersion: "LockDealNFT@0.9.1-ironblocks"
  },
  vaultManager: {
    address: "0x7Ff9315f538dF7eC76Ec4815249Dd30519726460",
    nameVersion: "VaultManager@0.0.4-ironblocks"
  },
  dealProvider: {
    address: "0xD985eFADECBC4A11C731f3086cbad8edE5e3e341",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0x25ea5cf98A46dbaBefd042B6cEebc501b659be78",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0xaEb7A13D3608C673E99685798f9ba5ACE41119d3",
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
    address: "0x655a8bc3875aedb2A4bc4aeeF5F84805207cB5DC",
    nameVersion: "MultiSenderV2@2.1.0"
  },
  dispenserProvider: {
    address: "0xEe25294438bc5542fEAFACC3E08Bb4658EB3C43f",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
