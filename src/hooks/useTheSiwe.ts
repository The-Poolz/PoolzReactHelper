import { useCallback, useMemo } from "react"
import { useThePoolz } from "./useThePoolz"

interface ISiwe {
  Domain: string
  URI: string
  Statement: string
  Version: number
  ChainId: number
  Nonce: number
  IssuedAt: string
  ExpirationAt: string
}
type TProps = () => Promise<Partial<ISiwe>>

export const useTheSiwe = (props: TProps) => {
  const thePoolz = useThePoolz()
  const { web3, account } = thePoolz

  const templateEip4361message = useCallback(async () => {
    const { Domain, URI, Statement, Version, ChainId, Nonce, IssuedAt, ExpirationAt } = await props()
    const { host: domain, href: uri } = window.location
    return `${Domain ?? domain} wants you to sign in with your Ethereum account:
${account}

${Statement ?? "I accept the Poolz Terms & Conditions: https://www.poolz.finance/terms-conditions"}

URI: ${URI ?? uri}
Version: ${Version ?? 1}
Chain ID: ${ChainId ?? 56}
Nonce: ${Nonce ?? new Date().getTime()}
Issued At: ${IssuedAt ?? new Date().toISOString()}
Expiration Time: ${ExpirationAt ?? new Date(new Date().getTime() + 1000 * 60 * 60 * 24).toISOString()}`
  }, [props])

  return useMemo(() => {
    const signInWithEthereum = async () => {
      if (!web3.currentProvider || !account) throw new Error("No web3 provider or account")
      const eip4361message = await templateEip4361message()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const signature = (await web3.currentProvider.request({
        method: "personal_sign",
        params: [eip4361message.replace(/[\r\n]/g, "\n"), account]
      })) as string

      return { eip4361message, signature, formatedMessage: eip4361message.replace(/\n/g, "\\n") }
    }
    return { signInWithEthereum }
  }, [web3, templateEip4361message, account])
}
