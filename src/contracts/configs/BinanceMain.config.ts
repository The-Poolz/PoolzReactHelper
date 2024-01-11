import type { TChainConfig } from "../../types/IThePoolzInterface"

export const BinanceMainChainConfig: TChainConfig = {
  poolzAddress: "0xCc8f6A82Ff034C15dFDAcBcab29F7Ea28C616EF7",
  lockedDealV2: {
    address: "0x436CE2ce8d8d2Ccc062f6e92faF410DB4d397905",
    nameVersion: "LockedDeal@2.3.3"
  },
  whiteListAddress: "0x06eD6E9A15D1bae5835544E305e43f5cAB5DB525",
  signUpAddress: "0x41b56bF3b21C53F6394a44A2ff84f1d2bBC27841",
  poolzBackWithdraw: "0x7Ff9315f538dF7eC76Ec4815249Dd30519726460",
  poolzTokenAddress: "0xbAeA9aBA1454DF334943951d51116aE342eAB255",
  delayVault: { address: "0x5eb57B1210338b13E3D5572d5e1670285Aa71702", nameVersion: "DelayVault@1.2.2" },
  multiSender: {
    address: "0x0759EdEd403B704dc8e76b4c73026782b58E0ED7",
    nameVersion: "MultiSender@1.0.0"
  },

  lockDealNFT: {
    address: "0x3d2C83bbBbfB54087d46B80585253077509c21AE",
    nameVersion: "LockDealNFT@0.9.1-ironblocks"
  },
  vaultManager: {
    address: "0xd82C03Bd0543b567C9CeC7B822373be2B167f00F",
    nameVersion: "VaultManager@0.0.4-ironblocks"
  },
  dealProvider: {
    address: "0x094C456cf51234810e9F34089F783ee42D81B7C1",
    nameVersion: "DealProvider@0.9.1-ironblocks"
  },
  lockDealProvider: {
    address: "0xEB21d2745E52f39C57c129b44d62cFca37aA0A0a",
    nameVersion: "LockDealProvider@0.9.1-ironblocks"
  },
  timedDealProvider: {
    address: "0x48247A03D67fAee33c9b6d9c4348C4C677d0095E",
    nameVersion: "TimedDealProvider@0.9.1-ironblocks"
  },
  collateralProvider: {
    address: "0xabc8a53b30b33190c959d304e1044b37c275d28d",
    nameVersion: "CollateralProvider@0.9.6"
  },
  refundProvider: {
    address: "0xfd8d52ee64c85f82ebef6ae8a409e5ccddac0c04",
    nameVersion: "RefundProvider@0.9.6"
  },
  simpleBuilder: {
    address: "0x4c6842E242B39F16328f2dEEd8cF23b407982aff",
    nameVersion: "SimpleBuilder@0.9.1-ironblocks"
  },
  simpleRefundBuilder: {
    address: "0x906f2db10cac66cd31859656a2d198ecae7b9ef1",
    nameVersion: "SimpleRefundBuilder@0.9.5"
  },
  delayVaultProvider: {
    address: "0xeb88Ff7799E0e7b187D98232336722ec9936B86D",
    nameVersion: "DelayVaultProvider@0.9.5-ironblocks"
  },
  delayVaultMigrator: {
    address: "0x10F1DA58d6d25B5909d5897ea3BA3E76fcE774A5",
    nameVersion: "DelayVaultMigrator@0.9.1-ironblocks"
  }
}
