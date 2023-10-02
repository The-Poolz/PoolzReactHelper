import { useCallback, useMemo, useState } from "react"
import { useThePoolz } from "./useThePoolz"
import { type AbiItem } from "web3-utils"
import type { TSidNameForAddressResult } from "../types/hooks"

function getSidAddress(networkId: number) {
  if ([97].includes(networkId)) {
    return "0xfFB52185b56603e0fd71De9de4F6f902f05EEA23"
  }
  if ([1, 3, 4, 5].includes(networkId)) {
    return "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
  }
  if ([56].includes(networkId)) {
    return "0x08CEd32a7f3eeC915Ba84415e9C07a7286977956"
  }
  if ([421613].includes(networkId)) {
    return "0x1f70fc8de5669eaa8C9ce72257c94500DC5ff2E4"
  }
  if ([42161].includes(networkId)) {
    return "0x4a067EE58e73ac5E4a43722E008DFdf65B2bF348"
  }
  return null
}

const reverseAbi = [
  {
    inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
    name: "resolver",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  }
]

const resolverAbi = [
  {
    constant: true,
    inputs: [{ name: "node", type: "bytes32" }],
    name: "name",
    outputs: [{ name: "ret", type: "string" }],
    payable: false,
    type: "function"
  }
]

export const useSidNameForAddress = (): TSidNameForAddressResult => {
  const [result, setResult] = useState<string | null>(null)
  const thePoolz = useThePoolz()

  const namehash = useCallback(
    (domain: string) => {
      const labels = domain.toLowerCase().split(".")
      let node = "0x" + "".padStart(64, "0")
      for (let i = labels.length - 1; i >= 0; i--) {
        const labelSha = thePoolz.web3.utils.keccak256(labels[i]).substring(2)
        node = thePoolz.web3.utils.keccak256(`${node}${labelSha}`)
      }
      return node
    },
    [thePoolz]
  )

  const callBack = useCallback(
    async (address?: string) => {
      const addr = address ?? thePoolz.account
      const sidAddress = getSidAddress(thePoolz.chainId)

      if (!addr || !sidAddress) return setResult(null)

      const reverseNode = namehash(`${addr.slice(2)}.addr.reverse`)

      const reverseContract = new thePoolz.web3.eth.Contract(reverseAbi as AbiItem[], sidAddress)
      const resolverAddress = await reverseContract.methods.resolver(reverseNode).call()

      if (parseInt(resolverAddress, 16) === 0) return setResult(null)

      const resolverContract = new thePoolz.web3.eth.Contract(resolverAbi as AbiItem[], resolverAddress)
      const name = await resolverContract.methods.name(reverseNode).call()
      setResult(name)
    },
    [thePoolz, namehash]
  )

  return useMemo<TSidNameForAddressResult>(() => [callBack, { data: result }], [callBack, result])
}
