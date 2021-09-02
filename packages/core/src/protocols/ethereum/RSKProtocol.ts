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
import { RskProtocolConfig, RskTestnetProtocolConfig } from './RskProtocolOptions'

// export class RskProtocolNetwork extends EthereumProtocolNetwork {
//     constructor(
//     //   name: string = MAINNET_NAME,
//     //   type: NetworkType = NetworkType.MAINNET,
//     //   rpcUrl: string = NODE_URL,
//     //   blockExplorer: ProtocolBlockExplorer = new EtherscanBlockExplorer(),
//     //   extras: EthereumProtocolNetworkExtras = new EthereumProtocolNetworkExtras()
//     ) {
//     //   super(name, type, rpcUrl, blockExplorer, extras)

//     }
//   }

// export class RSKProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
//   name = 'RSK'
//   networkType = NetworkType.MAINNET
//   rpcUrl = 'https://public-node.rsk.co'
//   blockexplorerUrl = 'https://explorer.rsk.co'
//   chainId = 30

//   constructor(public readonly options: EthereumProtocolOptions =  new EthereumProtocolOptions(
//     new EthereumProtocolNetwork(
//       'RSK Mainnet',
//       NetworkType.MAINNET,
//       'https://public-node.rsk.co',
//       new EtherscanBlockExplorer('https://explorer.rsk.co'),
//       new EthereumProtocolNetworkExtras(30)
//     ),
//     new RskProtocolConfig()
//   )) {

//     super(options)

//     // this.name = name
//     this.standardDerivationPath = `m/44'/137'/0'/0`

//     this.symbol = 'RBTC'
//     this.feeSymbol = 'RBTC'
//     this.marketSymbol = 'RBTC'
//     this.identifier = MainProtocolSymbols.RSK
//   }
// }

export class RSKProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
  name = 'RSK'
  networkType = NetworkType.MAINNET
  rpcUrl = 'https://public-node.rsk.co'
  blockexplorerUrl = 'https://explorer.rsk.co'
  chainId = 30

  constructor(
    name = 'RSK',
    networkType = NetworkType.MAINNET,
    rpcUrl = 'https://public-node.rsk.co',
    blockexplorerUrl = 'https://explorer.rsk.co',
    chainId = 30
  ) {
    // we probably need another network here, explorer is ok
    super(
      new EthereumProtocolOptions(
        new EthereumProtocolNetwork(
          name,
          networkType,
          rpcUrl,
          new EtherscanBlockExplorer(blockexplorerUrl),
          new EthereumProtocolNetworkExtras(chainId)
        ),
        networkType === NetworkType.MAINNET ? new RskProtocolConfig() : new RskTestnetProtocolConfig()
      )
    )

    this.name = name
    if (networkType == NetworkType.MAINNET) {
      this.standardDerivationPath = `m/44'/137'/0'/0`
    } else {
      this.standardDerivationPath = `m/44'/37310'/0'/0/N`
    }

    this.symbol = 'RBTC'
    this.feeSymbol = 'RBTC'
    this.marketSymbol = 'RBTC'
    this.identifier = MainProtocolSymbols.RSK
  }
}

export class RSKTestnetProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
  constructor() {
    // // we probably need another network here, explorer is ok
    // super('RSK Testnet', NetworkType.TESTNET, 'https://public-node.testnet.rsk.co', 'https://explorer.testnet.rsk.co', 31)
    super(
      new EthereumProtocolOptions(
        new EthereumProtocolNetwork(
          'RSK Testnet',
          NetworkType.TESTNET,
          'https://public-node.testnet.rsk.co',
          new EtherscanBlockExplorer('https://explorer.testnet.rsk.co'),
          new EthereumProtocolNetworkExtras(31)
        )
        // ,
        // new RskProtocolConfig()
      )
    )

    this.name = 'RSK Testnet'
    this.standardDerivationPath = `m/44'/37310'/0'/0/N`
    this.symbol = 'RBTC'
    this.feeSymbol = 'RBTC'
    this.marketSymbol = 'RBTC'
    this.identifier = MainProtocolSymbols.RSK
  }
}
