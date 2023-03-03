import Web3 from "web3"
import { Contract } from "web3-eth-contract"

export interface IChainInfo {
  name: string
  chain: string
  nativeCurrency: { name: string; symbol: string; decimals: number }
  infoURL: string
  chainId: number
}

export interface IThePoolzInterface {
  account?: string
  chainId: number
  balance: string
  web3?: Web3
  getChaincoinInfo(k?: number): Promise<IChainInfo | undefined>
  Contract(name: string, address?: string): Promise<Contract | undefined>
}

export interface IThePoolzContextInterface {
  thePoolz: IThePoolzInterface
  setProvider: React.Dispatch<React.SetStateAction<typeof Web3.givenProvider>>
}
