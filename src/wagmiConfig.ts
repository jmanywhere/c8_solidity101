import { w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig } from 'wagmi'
import { goerli, mainnet, sepolia } from 'wagmi/chains'

export const walletConnectProjectId = '5b3561f6a7c0319d2fcf6a9d20d6b1e8'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [w3mProvider({ projectId: walletConnectProjectId })],
)

export const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    chains,
    projectId: walletConnectProjectId,
    version: 2,
  }),
  publicClient,
  webSocketPublicClient,
})

export { chains }
