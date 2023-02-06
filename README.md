# ReactHelper

### Reporting Bugs / Feature Requests

[![Open Bugs](https://img.shields.io/github/issues/The-Poolz/PoolzReactHelper/bug?color=d73a4a&label=bugs)](https://github.com/The-Poolz/PoolzReactHelper/issues?q=is%3Aissue+is%3Aopen+label%3Abug)
[![Feature Requests](https://img.shields.io/github/issues/The-Poolz/PoolzReactHelper/feature-request?color=ff9001&label=feature%20requests)](https://github.com/The-Poolz/PoolzReactHelper/issues?q=is%3Aissue+label%3Afeature-request+is%3Aopen)
[![Closed Issues](https://img.shields.io/github/issues-closed/The-Poolz/PoolzReactHelper?color=%2325CC00&label=issues%20closed)](https://github.com/The-Poolz/PoolzReactHelper/issues?q=is%3Aissue+is%3Aclosed+)

## Installation

You can install the package either using [NPM](https://www.npmjs.com/package/@poolzfinance/reacthelper) or using [Yarn](https://yarnpkg.com/package/@poolzfinance/reacthelper)

### Using NPM

```bash
npm install @poolzfinance/reacthelper
```

### Yarn

```bash
yarn add @poolzfinance/reacthelper
```

## Usage

src/index.tsx

```typescript
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThePoolzProvider } from "@poolzfinance/reacthelper"
import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement!)

root.render(
  <StrictMode>
    <ThePoolzProvider>
      <App />
    </ThePoolzProvider>
  </StrictMode>
)
```

### Connect MetaMask wallet

src/App.tsx

```typescript
import { useThePoolz, useConnectWallet } from "@poolzfinance/reacthelper"

export default function App() {
  const thePoolz = useThePoolz()
  const { account } = thePoolz
  const { isMetamask, connectMetamask } = useConnectWallet()

  return (
    <div>
      <h1>ReactHelper</h1>
      {account || (
        <button
          onClick={async () => {
            try {
              await connectMetamask()
            } catch (error) {
              console.error(error)
            }
          }}>
          {!isMetamask && "Install"} Metamask
        </button>
      )}
    </div>
  )
}
```

Demo: [SandBox](https://codesandbox.io/s/reacthelper-t9vhd5)
