import { useMemo } from "react"
import { useThePoolz } from "./useThePoolz"

interface ISiwe {
  Domain: string
  URI: string
  Statement: string
  Version: number
  ChainId: number
  Nonce: number
  IssuedAt: string
}

export const useSiwe = ({ Domain, URI, Statement, Version, ChainId, Nonce, IssuedAt }: Partial<ISiwe>) => {
  const thePoolz = useThePoolz()
  const { web3, account } = thePoolz

  const { host: domain, href: uri } = window.location
  const MessageTemplate = `${Domain ?? domain} wants you to sign in with your Ethereum account:
${account}

${Statement ?? "I accept the Poolz Terms & Conditions: https://www.poolz.finance/terms-conditions"}

URI: ${URI ?? uri}
Version: ${Version ?? 1}
Chain ID: ${ChainId ?? 56}
Nonce: ${Nonce ?? new Date().getTime()}
Issued At: ${IssuedAt ?? new Date().toISOString()}
Expiration Time: ${new Date(new Date().getTime() + 1000 * 60 * 60 * 24).toISOString()}`

  return useMemo(() => {
    const signInWithEthereum = async () => {
      if (!web3.currentProvider || !account) return
      try {
        // @ts-ignore
        const signature = (await web3.currentProvider.request({
          method: "personal_sign",
          params: [MessageTemplate.replace(/[\r\n]/g, "\n"), account]
        })) as string

        return { MessageTemplate, signature, formatedMessage: MessageTemplate.replace(/\n/g, "\\n") }
      } catch (error) {
        console.error(error)
      }
    }
    return { signInWithEthereum }
  }, [web3, MessageTemplate, account])
}
