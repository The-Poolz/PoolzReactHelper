import type { TChainConfig } from "../../types/IThePoolzInterface"

export const BinanceTestChainConfig: TChainConfig = {
  chainInfo: {
    name: "BNB Smart Chain Testnet",
    chain: "BSC",
    chainId: 97,
    nativeCurrency: {
      name: "BNB Chain Native Token",
      symbol: "tBNB",
      decimals: 18
    },
    infoURL: "https://www.bnbchain.org/en",
    explorers: [
      {
        name: "bscscan-testnet",
        url: "https://testnet.bscscan.com",
        standard: "EIP3091"
      }
    ]
  },
  poolzAddress: "0xEEF0b7a6cd416006815ed3D66B670e1da73E116C",
  dispenserAddress: "0x7352116Fc2C7E7FF172D9E7dA2F31250E537ACcb",
  whiteListAddress: "0xC68CD044B5F888b8D3054C9dDD7a396b73f4418c",

  lockedDealV2: {
    address: "0x60b157886e908dD0d6F42d01F96681018287A8b0",
    nameVersion: "LockedDeal@2.3.3"
  },
  signUpAddress: "0xA98b8386a806966c959C35c636b929FE7c5dD7dE",
  poolzTokenAddress: "0xE14A2A1006B83F363569BC7b5b733191E919ca34",
  delayVault: {
    address: "0x607155A953d5f598d2F7CcD9a6395Af389cfecE5",
    nameVersion: "DelayVault@1.2.2"
  },
  lockDealNFT: {
    address: "0xe42876a77108E8B3B2af53907f5e533Cba2Ce7BE",
    nameVersion: "LockDealNFT@0.9.1-ironblocks"
  },
  vaultManager: {
    address: "0xF0A8AAc3deB7596527A61697D0a9728E3A67D3B7",
    nameVersion: "VaultManager@0.0.4-ironblocks"
  },
  dealProvider: {
    address: "0x70B0F2fd774376063faCC9178307cF1E18Ea3aF0",
    nameVersion: "DealProvider@0.9.1-ironblocks"
  },
  lockDealProvider: {
    address: "0x1a66F57eEfdeC7757Ba76B1c42EA9a8e110EBB95",
    nameVersion: "LockDealProvider@1.0.5"
  },
  timedDealProvider: {
    address: "0xE2f83a5120a562809bA30b3aeC063d91FcF3BDC2",
    nameVersion: "TimedDealProvider@1.0.5"
  },
  collateralProvider: {
    address: "0xb2b37652577A00655A45E6db8bB61251e47D4B8a",
    nameVersion: "CollateralProvider@0.9.6"
  },
  refundProvider: {
    address: "0xD4780f8298385a034e44515977F29E3DaC83fB0f",
    nameVersion: "RefundProvider@0.9.6"
  },
  simpleBuilder: {
    address: "0xaE297EeC7A7782e81CC23E6A3B6C06621B12dF26",
    nameVersion: "SimpleBuilder@1.1.1"
  },
  simpleRefundBuilder: {
    address: "0xC45C273Cf9aD9727f8b057C27E57253feF2c0ED6",
    nameVersion: "SimpleRefundBuilder@1.1.1"
  },
  multiSenderV2: {
    address: "0xaF2F6E827728a9e0288d69b0ea97Bd188DfBb3b1",
    nameVersion: "MultiSenderV2@2.1.0"
  },
  delayVaultProvider: {
    address: "0x9fd743f499d852E3A2cFEAC037e5562126468D28",
    nameVersion: "DelayVaultProvider@0.9.5-ironblocks"
  },
  delayVaultMigrator: {
    address: "0xFc4E9DDd1E21a9BaDEb1A4C81687A20fe135A54F",
    nameVersion: "DelayVaultMigrator@0.9.1-ironblocks"
  },
  tokenNFTConnector: {
    address: "0x99dfade11d9cd4c2b192efda205c50d982cd76a1",
    nameVersion: "TokenNFTConnector@1.2.1"
  },
  dispenserProvider: {
    address: "0xa9c68640C1AA52E91A75F4c5e2786F68049541Ad",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
