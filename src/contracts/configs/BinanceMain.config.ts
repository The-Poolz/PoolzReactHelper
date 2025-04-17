import type { TChainConfig } from "../../types/IThePoolzInterface"

export const BinanceMainChainConfig: TChainConfig = {
  chainInfo: {
    name: "BNB Smart Chain Mainnet",
    chain: "BSC",
    nativeCurrency: {
      name: "BNB Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    infoURL: "https://www.bnbchain.org/en",
    chainId: 56,
    explorers: [
      {
        name: "bscscan",
        url: "https://bscscan.com",
        standard: "EIP3091"
      },
      {
        name: "dexguru",
        url: "https://bnb.dex.guru",
        icon: "dexguru",
        standard: "EIP3091"
      }
    ]
  },
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
  multiSenderV2: {
    address: "0x114DAdDE8112A5c43aaBc6373473c282e14948Fa",
    nameVersion: "MultiSenderV2@2.1.0"
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
    address: "0x09b158df31ec4edf2dcd2c1dbda60b69dad01347",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0x7b164fc59e5d992275fac8dbb7304307592aac8c",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0xb6D8C60B8098C15BF76f4180a6d3a0574917C930",
    nameVersion: "TimedDealProvider@1.0.6"
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
  },
  tokenNFTConnector: {
    address: "0x23f561B92AAa13d7C15A1038297Cd59bAe6C47c5",
    nameVersion: "TokenNFTConnector@1.2.1"
  },
  dispenserProvider: {
    address: "0x93441BF11A3Cc2352253013990d68F5A2b1EC3ed",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
