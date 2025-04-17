import type { TChainConfig } from "../../types/IThePoolzInterface"

export const MaticMainChainConfig: TChainConfig = {
  chainInfo: {
    name: "Polygon Mainnet",
    chain: "Polygon",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    infoURL: "https://polygon.technology/",
    chainId: 137,
    explorers: [
      {
        name: "polygonscan",
        url: "https://polygonscan.com",
        standard: "EIP3091"
      },
      {
        name: "dexguru",
        url: "https://polygon.dex.guru",
        icon: "dexguru",
        standard: "EIP3091"
      }
    ]
  },
  poolzAddress: "0xDeab1420F6C024140bAB2a248A424F780Ed0964C",
  whiteListAddress: "0xD39eA2C72B99E65F1CDa47E727b453964B45e036",
  lockedDealV2: {
    address: "0x9D13B213852669077131f8A24A676f27ab0C2931",
    nameVersion: "LockedDeal@2.3.2"
  },
  multiSenderV2: {
    address: "0x9c8f78e0aeab8190c9d1df7bed0b26c1edcb8de6",
    nameVersion: "MultiSenderV2@2.1.0"
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
    address: "0x2A42701fE4D3a57AF04B0c9d99bABfbB03Fe8657",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0x42669ac65847E4CE67925222aCcF713707a43F6d",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0xf188c5B4d8CCD2a6E16a853Ba9F2dFd20ce1ed70",
    nameVersion: "TimedDealProvider@1.0.6"
  },
  collateralProvider: {
    address: "0x969d6a2a995e0a6e2f82803840581e21ee6f3a97",
    nameVersion: "CollateralProvider@1.0.2"
  },
  refundProvider: {
    address: "0x34fbf73bfe879b868ae2c0f205762798e29b7037",
    nameVersion: "RefundProvider@1.0.2"
  },
  simpleBuilder: {
    address: "0x8d82b419a15deb20c43934f5a40ecf876df37e93",
    nameVersion: "SimpleBuilder@1.2.2"
  },
  simpleRefundBuilder: {
    address: "0xa20262e67e46b40bdf6e647b3eac3acb504ad04d",
    nameVersion: "SimpleRefundBuilder@1.2.2"
  },
  dispenserProvider: {
    address: "0x55e7bBC157D3Ce3c9b507ec0A7948782e44BB29b",
    nameVersion: "DispenserProvider@1.1.2"
  }
}
