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
  }
}
