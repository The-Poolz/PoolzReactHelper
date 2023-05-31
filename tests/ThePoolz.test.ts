import ThePoolz from "../src/poolz/ThePoolz"

let mockAccounts = Promise.resolve(["0x000"])
let mockBalance = (address: string) => Promise.resolve(address)
let mockChainId = Promise.resolve(1)

jest.mock("web3", () => {
  const originalModule = jest.requireActual("web3")
  return {
    __esModule: true,
    default: jest.fn().mockReturnValue({
      ...originalModule,
      currentProvider: {
        request: jest.fn()
      },
      eth: {
        getAccounts: jest.fn(async () => mockAccounts),
        getBalance: jest.fn(async (address: string) => mockBalance(address)),
        getChainId: jest.fn(async () => mockChainId),
        Contract: jest.fn(() => ({
          methods: {
            balanceOf: jest.fn(() => jest.fn),
            name: jest.fn(() => jest.fn),
            symbol: jest.fn(() => jest.fn),
            decimals: jest.fn(() => jest.fn)
          },
          options: { address: "0x000" }
        }))
      }
    })
  }
})

describe("ThePoolz", () => {
  test("thePoolz instanse", async () => {
    const thePoolz = new ThePoolz({ isTrustWallet: true })
    await thePoolz.init()
    await thePoolz.ERC20Balance("ERC20", "0x000")
    await thePoolz.ERC20Info("ERC20")
    await thePoolz.Contract("ERC20", "0x000")
    await thePoolz.Contract("ERC20", "0x000")
    await thePoolz.getChaincoinInfo()
  })
  test("throw errors for ChainId", async () => {
    expect.assertions(1)
    const error = new Error("error")
    mockChainId = Promise.reject(error)
    const thePoolz = new ThePoolz("http://localhost:8545")
    try {
      await thePoolz.init()
    } catch (e) {
      expect(e).toEqual(error)
    }
  })
  test("Empty #provider", async () => {
    const thePoolz = new ThePoolz(null)
    await thePoolz.init()
  })
  test("Binance chain", async () => {
    mockChainId = Promise.resolve(56)
    const thePoolz = new ThePoolz("http://localhost:8545")
    await thePoolz.init()
  })
})
