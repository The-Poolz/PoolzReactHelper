import type { TChainConfig } from "../../types/IThePoolzInterface"

export const NeonChainConfig: TChainConfig = {
  chainInfo: {
    name: "Neon EVM Mainnet",
    chain: "Solana",
    nativeCurrency: {
      name: "Neon",
      symbol: "NEON",
      decimals: 18
    },
    infoURL: "https://neonevm.org",
    rpc: [
      "https://neon-proxy-mainnet.solana.p2p.org",
      "https://neon-evm.drpc.org",
      "wss://neon-evm.drpc.org"
    ],
    chainId: 245022934,
    explorers: [
      {
        name: "neonscan",
        url: "https://neonscan.org",
        standard: "EIP3091"
      },
      {
        name: "native",
        url: "https://neon.blockscout.com",
        standard: "EIP3091"
      }
    ]
  },
  lockedDealV2: {
    address: "0x7ff9315f538df7ec76ec4815249dd30519726460",
    nameVersion: "LockedDeal@2.3.3"
  },
  whiteListAddress: "0x9c8f78e0aeab8190c9d1df7bed0b26c1edcb8de6"
}