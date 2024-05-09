import type { TChainConfig } from "../../types/IThePoolzInterface"

export const EthMainChainConfig: TChainConfig = {
  poolzAddress: "0x99896BA5fde6CED06569CF848982d2c7779d2694",
  whiteListAddress: "0xf5BbB7f9D38387A2196CD242e51808dc7E5CEF88",
  poolzBackWithdraw: ["0x872496054817B825b09e2b38531Fd33Ab41b2367", "0x000BaB4F6b5560d7942AC88cf0233b6028B5B465"],
  lockedDealV2: {
    address: "0x285B4866257eF51FfBDD239c10dE5f9493413d8f",
    nameVersion: "LockedDeal@2.3.3"
  },
  multiSender: {
    address: "0xf283bee36abb08c2702d1d6d2fc2c4c6a8cb5ed1",
    nameVersion: "MultiSender@1.0.0"
  },
  multiSenderV2: {
    address: "0x658bcdfe51795ba43e9fd1ae9e39ddfbb1e70c5f",
    nameVersion: "MultiSenderV2@2.1.0"
  },
  // delayVault: { address: "0x674c9FDc5DcBD525cd3ea2C3A2caE6cfe79727C5", nameVersion: "DelayVault@1.2.2" }
}
