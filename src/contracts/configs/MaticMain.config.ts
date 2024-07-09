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
    rpc: [
      "https://polygon-rpc.com/",
      "https://rpc-mainnet.matic.network",
      "https://matic-mainnet.chainstacklabs.com",
      "https://rpc-mainnet.maticvigil.com",
      "https://rpc-mainnet.matic.quiknode.pro",
      "https://matic-mainnet-full-rpc.bwarelabs.com",
      "https://polygon-bor-rpc.publicnode.com",
    ],
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
  }
}
