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
    address: "0xB7144D8c776E74a53F1151060737F9De68d0b5C2",
    nameVersion: "LockDealNFT@0.9.1-ironblocks"
  },
  vaultManager: {
    address: "0xc7720Ac2C4Eae900D0BaC9175918AD33064A257a",
    nameVersion: "VaultManager@0.0.4-ironblocks"
  },
  dealProvider: {
    address: "0x911f8C076B30b3d52e5C236EB9Bd91E8f094BA26",
    nameVersion: "DealProvider@0.9.1-ironblocks"
  },
  lockDealProvider: {
    address: "0x33A1F1bA6365db7Cab6fc803d54324faA5863101",
    nameVersion: "LockDealProvider@0.9.1-ironblocks"
  },
  timedDealProvider: {
    address: "0x46658A869641620a1BC7DC228071D9d816ED3194",
    nameVersion: "TimedDealProvider@0.9.1-ironblocks"
  },
  collateralProvider: {
    address: "0x368696C68AE3381A00D68113016280846c26521C",
    nameVersion: "CollateralProvider@0.9.1-ironblocks"
  },
  refundProvider: {
    address: "0x18b8b341B1d114bEb1efBfb689db5e3da7673b01",
    nameVersion: "RefundProvider@0.9.1-ironblocks"
  },
  simpleBuilder: {
    address: "0x4338C2706052930C065CD7fe396f4E70494Cf7B3",
    nameVersion: "SimpleBuilder@0.9.1-ironblocks"
  },
  simpleRefundBuilder: {
    address: "0x9c39a03459522185a1598D4ad2a9cCCCB0F5Ff8f",
    nameVersion: "SimpleRefundBuilder@0.9.1-ironblocks"
  },
  multiSender: {
    address: "0x2dAc629DbD97f248A3443E446fA93330aF773571",
    nameVersion: "MultiSender@1.0.0"
  },
  delayVaultProvider: {
    address: "0x9E060A352bD1417035049c80fd27136950AA762d",
    nameVersion: "DelayVaultProvider@0.9.5-ironblocks"
  }
}
