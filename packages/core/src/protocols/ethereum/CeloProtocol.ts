import { BaseEthereumProtocol } from './BaseEthereumProtocol'
import { EtherscanInfoClient } from './clients/info-clients/EtherscanInfoClient'
import { AirGapNodeClient } from './clients/node-clients/AirGapNodeClient'
import { NetworkType } from '../../utils/ProtocolNetwork'
import { MainProtocolSymbols } from '../../utils/ProtocolSymbols'
import {
  EthereumProtocolNetwork,
  EthereumProtocolNetworkExtras,
  EthereumProtocolOptions,
  EtherscanBlockExplorer
} from './EthereumProtocolOptions'
import { CeloProtocolConfig, CeloTestnetProtocolConfig } from './CeloProtocolOptions'

export class CeloProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
  constructor(
    name = 'Celo',
    networkType = NetworkType.MAINNET,
    rpcUrl = 'https://forno.celo.org',
    blockexplorerUrl = 'https://explorer.celo.org',
    chainId = 42220
  ) {
    super(
      new EthereumProtocolOptions(
        new EthereumProtocolNetwork(
          name,
          networkType,
          rpcUrl,
          new EtherscanBlockExplorer(blockexplorerUrl),
          new EthereumProtocolNetworkExtras(chainId)
        ),
        networkType === NetworkType.MAINNET ? new CeloProtocolConfig() : new CeloTestnetProtocolConfig()
      )
    )

    this.name = name
    this.symbol = 'CELO'
    this.feeSymbol = 'CELO'
    this.marketSymbol = 'CELO'
    this.identifier = MainProtocolSymbols.CELO
  }
}

export class CeloTestnetProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
  constructor() {
    super(
      new EthereumProtocolOptions(
        new EthereumProtocolNetwork(
          'CELO Testnet(Alfajores)',
          NetworkType.TESTNET,
          'https://alfajores-forno.celo-testnet.org',
          new EtherscanBlockExplorer('https://alfajores-blockscout.celo-testnet.org'),
          new EthereumProtocolNetworkExtras(44787)
        )
        // ,
        // new CeloProtocolConfig()
      )
    )

    this.symbol = 'CELO'
    this.feeSymbol = 'CELO'
    this.marketSymbol = 'CELO'
    this.identifier = MainProtocolSymbols.CELO
  }
}
