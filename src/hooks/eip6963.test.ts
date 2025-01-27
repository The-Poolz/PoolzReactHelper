// import { describe, it, vi, beforeEach, afterEach, expect } from "jest"
import { EIP6963Providers, type EIP6963ProviderDetail } from "./EIP6963Providers"

describe("EIP6963Providers", () => {
  const mockProvider: EIP6963ProviderDetail = {
    info: {
      walletId: "mockWallet",
      uuid: "mockUUID",
      name: "Mock Provider",
      icon: "mockIcon"
    },
    provider: {
      request: async () => null,
      on: () => {},
      removeListener: () => {}
    }
  }

  beforeEach(() => {
    const providers = EIP6963Providers.value()
    providers.splice(0, providers.length)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should return an empty array initially", () => {
    expect(EIP6963Providers.value()).toEqual([])
  })

  it("should add a provider on receiving 'eip6963:announceProvider' event", () => {
    const callback = jest.fn()
    const unsubscribe = EIP6963Providers.subscribe(callback)
    const event = new CustomEvent("eip6963:announceProvider", { detail: mockProvider })
    window.dispatchEvent(event)
    expect(EIP6963Providers.value()).toEqual([mockProvider])
    expect(callback).toHaveBeenCalledTimes(1)
    unsubscribe()
  })

  it("should not add duplicate providers with the same UUID", () => {
    const callback = jest.fn()
    const unsubscribe = EIP6963Providers.subscribe(callback)
    const event = new CustomEvent("eip6963:announceProvider", { detail: mockProvider })
    window.dispatchEvent(event)
    window.dispatchEvent(event)
    expect(EIP6963Providers.value()).toEqual([mockProvider])
    expect(callback).toHaveBeenCalledTimes(1)
    unsubscribe()
  })

  it("should remove the event listener when unsubscribed", () => {
    const callback = jest.fn()
    const unsubscribe = EIP6963Providers.subscribe(callback)
    unsubscribe()
    const event = new CustomEvent("eip6963:announceProvider", { detail: mockProvider })
    window.dispatchEvent(event)
    expect(callback).not.toHaveBeenCalled()
    expect(EIP6963Providers.value()).toEqual([])
  })

  it("should dispatch 'eip6963:requestProvider' event during subscription", () => {
    const dispatchSpy = jest.spyOn(window, "dispatchEvent")
    const unsubscribe = EIP6963Providers.subscribe(() => {})
    expect(dispatchSpy).toHaveBeenCalledWith(new Event("eip6963:requestProvider"))
    unsubscribe()
  })
})
