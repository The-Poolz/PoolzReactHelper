export type TGivenProvider = {
  isMetaMask?: boolean
  isCoinbaseWallet?: boolean
  isTrustWallet?: boolean
  providers?: TGivenProvider[]
  request({ method }: { method: string }): Promise<Window | null>
}
