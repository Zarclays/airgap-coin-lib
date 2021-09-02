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
import { BSCProtocolConfig, BSCTestnetProtocolConfig } from './BSCProtocolOptions'

export class BSCProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
  constructor(
    name = 'BNB',
    networkType = NetworkType.MAINNET,
    rpcUrl = 'https://bsc-dataseed.binance.org',
    blockexplorerUrl = 'https://bscscan.com',
    chainId = 56
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
        networkType === NetworkType.MAINNET ? new BSCProtocolConfig() : new BSCTestnetProtocolConfig()
      )
    )

    this.name = name
    this.symbol = 'BNB'
    this.feeSymbol = 'BNB'
    this.marketSymbol = 'BNB'
    this.identifier = MainProtocolSymbols.BSC
  }
}

export class BSCTestnetProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
  constructor() {
    super(
      new EthereumProtocolOptions(
        new EthereumProtocolNetwork(
          'BSC Testnet',
          NetworkType.TESTNET,
          'https://data-seed-prebsc-1-s1.binance.org:8545',
          new EtherscanBlockExplorer('https://testnet.bscscan.com'),
          new EthereumProtocolNetworkExtras(97)
        )
        // ,
        // new CeloProtocolConfig()
      )
    )

    this.symbol = 'BNB'
    this.feeSymbol = 'BNB'
    this.marketSymbol = 'BNB'
    this.identifier = MainProtocolSymbols.BSC
  }
}
