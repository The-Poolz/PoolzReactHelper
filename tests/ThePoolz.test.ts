import ThePoolz from "../src/poolz/ThePoolz"

describe("ThePoolz", () => {
  const thePoolz = new ThePoolz(null)
  test("thePoolz instanse", async () => {
    expect(thePoolz).toBeDefined()
    expect(typeof thePoolz.init).toBe("function")
    expect(await thePoolz.init()).toBeInstanceOf(ThePoolz)
  })
})
