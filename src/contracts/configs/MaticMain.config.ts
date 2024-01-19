import type { TChainConfig } from "../../types/IThePoolzInterface"

export const MaticMainChainConfig: TChainConfig = {
  poolzAddress: "0xDeab1420F6C024140bAB2a248A424F780Ed0964C",
  whiteListAddress: "0xD39eA2C72B99E65F1CDa47E727b453964B45e036",
  lockedDealV2: {
    address: "0x9D13B213852669077131f8A24A676f27ab0C2931",
    nameVersion: "LockedDeal@2.3.2"
  },
  multiSender: {
    address: "0x5a3892bab5c7f38c96e45f4f378056574a32df4b",
    nameVersion: "MultiSender@1.0.0"
  },
  lockDealNFT: {
    address: "0x9C36786836A594e3b355bA572A5Cd6841F69d86e",
    nameVersion: "LockDealNFT@0.9.1-ironblocks"
  },
  vaultManager: {
    address: "0x06fd710fD167f1f08b61e457F41D6e7c7DD9AF3D",
    nameVersion: "VaultManager@0.0.4-ironblocks"
  },
  dealProvider: {
    address: "0x0E85639403586c6c8B606AECB8A4b66be64f7A91",
    nameVersion: "DealProvider@0.9.1-ironblocks"
  },
  lockDealProvider: {
    address: "0x1FBeaEB2A2030787AF8026cE8C34E071CF4d8C5f",
    nameVersion: "LockDealProvider@0.9.1-ironblocks"
  },
  timedDealProvider: {
    address: "0x79Ab96f1705AdEa077a42026d77Ee945F802992c",
    nameVersion: "TimedDealProvider@0.9.1-ironblocks"
  },
  collateralProvider: {
    address: "0xd9f092eD4536E658A039019A7022C2Cff8BCB549",
    nameVersion: "CollateralProvider@0.9.1-ironblocks"
  },
  refundProvider: {
    address: "0xb6B0d332F3B4de249a0108bb58F0A60bb059d0Ee",
    nameVersion: "RefundProvider@0.9.1-ironblocks"
  },
  simpleBuilder: {
    address: "0x19DC2A2F214cC7538AF8f138637b21D150eE1030",
    nameVersion: "SimpleBuilder@0.9.1-ironblocks"
  },
  simpleRefundBuilder: {
    address: "0xaAA06C1b7D9Bd4577925a7535165e2F76E0f6969",
    nameVersion: "SimpleRefundBuilder@0.9.1-ironblocks"
  }
}
