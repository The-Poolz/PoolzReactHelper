import Web3 from "web3"

export interface IThePoolzInterface {
  account: string | null
  chainId: number | null
  web3: typeof Web3.givenProvider | null
}

export interface IThePoolzContextInterface {
  thePoolz: IThePoolzInterface
  setProvider: React.Dispatch<React.SetStateAction<typeof Web3.givenProvider>>
}
