import { NetworkType } from '../../utils/ProtocolNetwork'

import { MainProtocolSymbols } from '../../utils/ProtocolSymbols'

import { EthereumProtocolConfig, EthereumProtocolNetworkExtras, EtherscanBlockExplorer } from './EthereumProtocolOptions'

// tslint:disable:max-classes-per-file

export class BSCProtocolConfig extends EthereumProtocolConfig {
  constructor(
    public readonly symbol: string = 'BNB',
    public readonly name: string = 'BNB',
    public readonly marketSymbol: string = 'BNB',
    public readonly identifier = MainProtocolSymbols.BSC,
    // public readonly contractAddress: string,
    public readonly decimals: number = 18,
    public readonly type: NetworkType = NetworkType.MAINNET,
    public readonly rpcUrl: string = 'https://bsc-dataseed.binance.org',
    public readonly blockExplorer = new EtherscanBlockExplorer('https://bscscan.com'),
    public readonly extras = new EthereumProtocolNetworkExtras(56)
  ) {
    super()
  }
}

export class BSCTestnetProtocolConfig extends BSCProtocolConfig {
  constructor(
    public readonly type: NetworkType = NetworkType.TESTNET,
    public readonly rpcUrl: string = 'https://data-seed-prebsc-1-s1.binance.org:8545',
    public readonly blockExplorer = new EtherscanBlockExplorer('https://testnet.bscscan.com'),
    public readonly extras = new EthereumProtocolNetworkExtras(97)
  ) {
    super()
  }
}
