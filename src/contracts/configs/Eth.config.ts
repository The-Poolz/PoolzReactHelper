import type { TChainConfig } from "../../types/IThePoolzInterface"

export const EthMainChainConfig: TChainConfig = {
  chainInfo: {
    name: "Ethereum Mainnet",
    chain: "ETH",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    infoURL: "https://ethereum.org",
    chainId: 1,
    explorers: [
      {
        name: "etherscan",
        url: "https://etherscan.io",
        standard: "EIP3091"
      },
      {
        name: "blockscout",
        url: "https://eth.blockscout.com",
        icon: "blockscout",
        standard: "EIP3091"
      },
      {
        name: "dexguru",
        url: "https://ethereum.dex.guru",
        icon: "dexguru",
        standard: "EIP3091"
      }
    ]
  },
  poolzAddress: "0x99896BA5fde6CED06569CF848982d2c7779d2694",
  whiteListAddress: "0xf5BbB7f9D38387A2196CD242e51808dc7E5CEF88",
  poolzBackWithdraw: ["0x872496054817B825b09e2b38531Fd33Ab41b2367", "0x000BaB4F6b5560d7942AC88cf0233b6028B5B465"],
  lockedDealV2: {
    address: "0x285B4866257eF51FfBDD239c10dE5f9493413d8f",
    nameVersion: "LockedDeal@2.3.3"
  },
  multiSenderV2: {
    address: "0x658bcdfe51795ba43e9fd1ae9e39ddfbb1e70c5f",
    nameVersion: "MultiSenderV2@2.1.0"
  },
  vaultManager: {
    address: "0x9ff1db30c66cd9d3311b4b22da49791610922b13",
    nameVersion: "VaultManager@0.0.4-ironblocks"
  },
  lockDealNFT: {
    address: "0x5e0bB1fF9003ac3586f039D482d2974A6D7ED781",
    nameVersion: "LockDealNFT@1.0.2"
  },
  dealProvider: {
    address: "0xf8449c81E2d132e429caa1cb744E1ba7235C20DE",
    nameVersion: "DealProvider@1.0.6"
  },
  lockDealProvider: {
    address: "0x83d9a44395b6a4Aa3a907a445CB049C50fF5b962",
    nameVersion: "LockDealProvider@1.0.6"
  },
  timedDealProvider: {
    address: "0x313a8Dd9d9399fc625Ec946b328F45020d15A699",
    nameVersion: "TimedDealProvider@1.0.6"
  },
  simpleBuilder: {
    address: "0x39dDEE2Ee5dF625Ef91d509Ab40E926bbD83CD0C",
    nameVersion: "SimpleBuilder@1.2.2"
  },
  dispenserProvider: {
    address: "0xf5e1D15FdCbB8efC617632dCBAcBC74b96a3ccA7",
    nameVersion: "DispenserProvider@1.1.2"
  }
  // delayVault: { address: "0x674c9FDc5DcBD525cd3ea2C3A2caE6cfe79727C5", nameVersion: "DelayVault@1.2.2" }
}
