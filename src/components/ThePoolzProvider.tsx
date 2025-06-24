import React from "react"
import StrapiProvider from "@poolzfinance/strapi"
import Provider from "./Provider"
import { TChainConfig } from "../types/IThePoolzInterface"

const ThePoolzProvider = ({ children, overrides }: { children: React.ReactNode; overrides?: TChainConfig }) => {
  return (
    <StrapiProvider>
      <Provider overrides={overrides}>{children}</Provider>
    </StrapiProvider>
  )
}

export default ThePoolzProvider
