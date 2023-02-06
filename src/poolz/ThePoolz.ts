import Web3 from "web3"
import { IThePoolzInterface } from "../types/IThePoolzInterface"
import { defaultChainId } from "../constants"

class ThePoolz implements IThePoolzInterface {
  account = null
  chainId = defaultChainId
  web3: typeof Web3.givenProvider

  constructor(provider: typeof Web3.givenProvider) {
    this.web3 = new Web3(provider)
  }
  async init() {
    // await this.initChainId()
    // await this.initAccount()
    // await this.initContracts()
    return this
  }
}

export default ThePoolz
