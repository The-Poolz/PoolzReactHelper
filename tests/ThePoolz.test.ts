import ThePoolz from "../src/poolz/ThePoolz"

let mockAccounts = Promise.resolve(["0x000"])
let mockBalance = (address: string) => Promise.resolve(address)
let mockChainId = Promise.resolve(1)

jest.mock("web3", () => {
  const originalModule = jest.requireActual("web3")
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn().mockReturnValue({
      eth: {
        getAccounts: jest.fn(async () => mockAccounts),
        getBalance: jest.fn(async (address: string) => mockBalance(address)),
        getChainId: jest.fn(async () => mockChainId),
        Contract: jest.fn(() => ({
          methods: {}
        }))
      }
    })
  }
})

describe("ThePoolz", () => {
  /*test("thePoolz instanse with empty provider", async () => {
    const thePoolz = new ThePoolz()
    expect(thePoolz).toBeDefined()
    expect(thePoolz).toBeInstanceOf(ThePoolz)
    expect(typeof thePoolz.init).toBe("function")
    await thePoolz.init()
    // await thePoolz.ERC20()
    await thePoolz.Contract("ERC20")
    await thePoolz.getChaincoinInfo()
  })*/
  test("thePoolz instanse", async () => {
    const thePoolz = new ThePoolz("http://localhost:8545")
    await thePoolz.init()
    await thePoolz.Contract("ERC20")
    await thePoolz.Contract("ERC20")
  })
  test("throw errors for ChainId & Account", async () => {
    mockChainId = Promise.reject()
    mockAccounts = Promise.reject()
    const thePoolz = new ThePoolz("http://localhost:8545")
    await thePoolz.init()
  })
  test("throw error for Balance", async () => {
    mockBalance = (address: string) => Promise.reject(address)
    const thePoolz = new ThePoolz("http://localhost:8545")
    await thePoolz.init()
  })
})
