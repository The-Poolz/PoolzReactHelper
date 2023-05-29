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
  web3: Web3
  getChaincoinInfo(k?: number): Promise<IChainInfo | undefined>
  ERC20Balance(token: string, account: string): Promise<string>
  ERC20Info(token: string): Promise<{ decimals: number; symbol?: string; name?: string }>
  /**
   * @deprecated Use {@link ERC20Balance} instead.
   */
  Contract(name: string, address?: string): Promise<Contract | undefined>
}

export interface IThePoolzContextInterface {
  thePoolz: IThePoolzInterface
  setProvider: React.Dispatch<React.SetStateAction<typeof Web3.givenProvider>>
}
