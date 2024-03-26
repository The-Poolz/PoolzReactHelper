import type { TChainConfig } from "../../types/IThePoolzInterface"

export const BinanceTestChainConfig: TChainConfig = {
  poolzAddress: "0xEEF0b7a6cd416006815ed3D66B670e1da73E116C",
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
    address: "0x8FDf10F414395366b9fFbBa2058fe913D4F98cef",
    nameVersion: "LockDealProvider@0.9.1-ironblocks"
  },
  timedDealProvider: {
    address: "0xD3dC0C40387F19cFE2b434D56AC4CE939c789328",
    nameVersion: "TimedDealProvider@0.9.1-ironblocks"
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
    address: "0x06daa28410A8e26fC86DF3c3d2Cfb2875F4887e8",
    nameVersion: "SimpleBuilder@0.9.1-ironblocks"
  },
  simpleRefundBuilder: {
    address: "0x1C371DE722Bd7eCFA921AA9e3AD500c8fd9A64FC",
    nameVersion: "SimpleRefundBuilder@0.9.5"
  },
  multiSender: {
    address: "0xCEC38FA35B3ea4cB56019C4e00d33F5C2307E7eB",
    nameVersion: "MultiSender@1.0.0"
  },
  multiSenderV2: {
    address: "0x2206E8B1639800AF0868e503A1e51276E93B47a7",
    nameVersion: "MultiSenderV2@1.0.0"
  },
  tempMultiSender: {
    address: "0x3810fdF19f5736dE064bFFCcB1FAe4dcA62C21A7",
    nameVersion: "TempMultiSender@1.0.0"
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
    address: "0x0eED0587CE09C037aF79e340e3e2e53A09f81a52",
    nameVersion: "TokenNFTConnector@1.1.0",
    proxy: "0xF0f16f6A66462955cC9A1bAAaC0a801A5671be35"
  }
}
