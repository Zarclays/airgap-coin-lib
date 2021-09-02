import { NetworkType } from '../../utils/ProtocolNetwork'

import { MainProtocolSymbols } from '../../utils/ProtocolSymbols'

import { EthereumProtocolConfig, EthereumProtocolNetworkExtras, EtherscanBlockExplorer } from './EthereumProtocolOptions'

// tslint:disable:max-classes-per-file

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

export class RskTestnetProtocolConfig extends RskProtocolConfig {
  constructor(
    public readonly type: NetworkType = NetworkType.TESTNET,
    public readonly rpcUrl: string = 'https://public-node.testnet.rsk.co',
    public readonly blockExplorer = new EtherscanBlockExplorer('https://explorer.testnet.rsk.co'),
    public readonly extras = new EthereumProtocolNetworkExtras(31)
  ) {
    super()
  }
}
