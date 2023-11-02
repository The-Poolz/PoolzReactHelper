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
    address: "0x522B12eB0a9807b6d13717089124ce9420d495AC",
    nameVersion: "LockDealNFT@0.9.0"
  },
  vaultManager: {
    address: "0xe8bdd7C33eA8783176Fd0C8Df7B255cF64fEEFda",
    nameVersion: "VaultManager@0.0.4"
  },
  dealProvider: {
    address: "0x5b007F06CB9708A1E419Fe936aE826C4eba21a8d",
    nameVersion: "DealProvider@0.9.0"
  },
  lockDealProvider: {
    address: "0x39f5487929e68CC0242905d1f6e97d0C0992cb77",
    nameVersion: "LockDealProvider@0.9.0"
  },
  timedDealProvider: {
    address: "0x3D0Ca2259046D6660937864b67287269268D2b61",
    nameVersion: "TimedDealProvider@0.9.0"
  },
  collateralProvider: {
    address: "0xE63De121ca8Fc1C540DBCd432d1c9D3A5cDEB94A",
    nameVersion: "CollateralProvider@0.9.0"
  },
  refundProvider: {
    address: "0x9a3188e32Bda4C47491186b7DBd412854A8e3921",
    nameVersion: "RefundProvider@0.9.0"
  },
  simpleBuilder: {
    address: "0x4338C2706052930C065CD7fe396f4E70494Cf7B3",
    nameVersion: "SimpleBuilder@0.9.0"
  },
  simpleRefundBuilder: {
    address: "0x9c39a03459522185a1598D4ad2a9cCCCB0F5Ff8f",
    nameVersion: "SimpleRefundBuilder@0.9.0"
  }
}
