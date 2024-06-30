import React, { useEffect, useMemo, useState } from "react"
import Web3 from "web3"
import ThePoolzContext from "./Context"
import ThePoolz from "../poolz/ThePoolz"
import { AbiRecord, IContractInfo, RequiredContract, TChainConfig } from "../types/IThePoolzInterface"
import { AbiItem } from "web3-utils"
import { AVAILABLE_CHAINS } from "../constants"

const fetchContractAbi = async (nameVersion: string): Promise<AbiItem[]> => {
  const localAbi = localStorage.getItem(nameVersion)
  if(localAbi) return JSON.parse(localAbi) as AbiItem[]
  const response = await fetch(`https://poolzfinancedata.com/contracts?_where[0][NameVersion]=${nameVersion}`)
  const abi = (await response.json())[0].ABI as AbiItem[]
  localStorage.setItem(nameVersion, JSON.stringify(abi))
  return abi
}

const ThePoolzProvider = ({ children, overrides }: { children: React.ReactNode, overrides?: TChainConfig }) => {
  const [thePoolzInstance, setThePoolzInstance] = useState(new ThePoolz(Web3.givenProvider))
  const [provider, setProvider] = useState(Web3.givenProvider)
  const [requiredContracts, setRequiredContracts] = useState<RequiredContract[]>([])
  const [contractAbis, setContractAbis] = useState<AbiRecord>()

  const contextValue = useMemo(() => ({ thePoolz: thePoolzInstance, setProvider, setRequiredContracts }), [thePoolzInstance, setProvider, setRequiredContracts])

  useEffect(() => {
    if (!provider) return

    const init = async () => {
      if(!contractAbis) return
      const instance = new ThePoolz(provider, overrides)
      await instance.init(contractAbis)
      setThePoolzInstance(instance)
    }
    init().catch(console.error)
    provider
      .on("accountsChanged", init)
      .on("chainChanged", init)


  }, [provider, setThePoolzInstance]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const fetchAbis = async () => {
      if(!requiredContracts.length) return
      let newContractAbis: AbiRecord = {} as AbiRecord
      await Promise.all(requiredContracts.map(async (contractName) => {
        if(contractAbis?.[contractName]) return
        const chainConfig = AVAILABLE_CHAINS.get(thePoolzInstance.chainId)
        if(!chainConfig) return
        const contract = chainConfig[contractName] as IContractInfo
        const abi = await fetchContractAbi(contract.nameVersion)
        newContractAbis = { ...newContractAbis, [contractName]: abi }
      }))
      setContractAbis(newContractAbis)
    }
    fetchAbis().catch(console.error)
  }, [requiredContracts])

  return (
    <ThePoolzContext.Provider value={contextValue}>
      {children}
    </ThePoolzContext.Provider>
  )
}

export default ThePoolzProvider
