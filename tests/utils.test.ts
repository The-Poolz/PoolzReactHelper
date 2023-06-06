import { getAvailableNets } from "../src/utils"

test("getAvailableNets", () => {
  expect(getAvailableNets("delayVault")).toEqual([56, 97])
})
