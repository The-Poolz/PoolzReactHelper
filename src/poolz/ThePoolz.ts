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
    await this.initChainId()
    await this.initAccount()
    // await this.initContracts()
    return this
  }
  async initChainId() {
    try {
      this.chainId = await this.web3.eth.getChainId()
    } catch (error) {}
  }

  async initAccount() {
    try {
      const accounts = await this.web3.eth.getAccounts()
      console.log("accounts", accounts)
      this.account = accounts.length ? accounts[0] : null
    } catch (error) {}
  }
}

export default ThePoolz
