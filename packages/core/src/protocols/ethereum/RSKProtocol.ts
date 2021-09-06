import { MainProtocolSymbols, NetworkType } from '../..'
import { BaseEthereumProtocol } from './BaseEthereumProtocol'
import { EtherscanInfoClient } from './clients/info-clients/EtherscanInfoClient'
import { AirGapNodeClient } from './clients/node-clients/AirGapNodeClient'
import {
  EthereumProtocolNetwork,
  EthereumProtocolNetworkExtras,
  EthereumProtocolConfig,
  EthereumProtocolOptions,
  EtherscanBlockExplorer
} from './EthereumProtocolOptions'

//default RSK Main config
export class RskProtocolConfig extends EthereumProtocolConfig {
  constructor(
    public readonly symbol: string = 'RBTC',
    public readonly name: string = 'RSK',
    public readonly marketSymbol: string = 'RBTC',
    public readonly identifier = MainProtocolSymbols.RSK,
    // public readonly contractAddress: string,
    public readonly decimals: number = 18,
    public readonly type: NetworkType = NetworkType.MAINNET,
    public readonly rpcUrl: string = 'https://public-node.rsk.co',
    public readonly blockExplorer = new EtherscanBlockExplorer('https://explorer.rsk.co'),
    public readonly extras = new EthereumProtocolNetworkExtras(30)
  ) {
    super()
  }
}

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

export class RSKProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
  constructor(
    name = 'RSK Mainnet',
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
        )
        // ,
        // new  RskProtocoloConfig()
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
