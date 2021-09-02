import { NetworkType } from '../../utils/ProtocolNetwork'

import { MainProtocolSymbols } from '../../utils/ProtocolSymbols'

import { EthereumProtocolConfig, EthereumProtocolNetworkExtras, EtherscanBlockExplorer } from './EthereumProtocolOptions'

// tslint:disable:max-classes-per-file

export class CeloProtocolConfig extends EthereumProtocolConfig {
  constructor(
    public readonly symbol: string = 'CELO',
    public readonly name: string = 'CELO',
    public readonly marketSymbol: string = 'CELO',
    public readonly identifier = MainProtocolSymbols.CELO,
    // public readonly contractAddress: string,
    public readonly decimals: number = 18,
    public readonly type: NetworkType = NetworkType.MAINNET,
    public readonly rpcUrl: string = 'https://forno.celo.org',
    public readonly blockExplorer = new EtherscanBlockExplorer('https://explorer.celo.org'),
    public readonly extras = new EthereumProtocolNetworkExtras(42220)
  ) {
    super()
  }
}

export class CeloTestnetProtocolConfig extends CeloProtocolConfig {
  constructor(
    public readonly type: NetworkType = NetworkType.TESTNET,
    public readonly rpcUrl: string = 'https://alfajores-forno.celo-testnet.org',
    public readonly blockExplorer = new EtherscanBlockExplorer('https://alfajores-blockscout.celo-testnet.org'),
    public readonly extras = new EthereumProtocolNetworkExtras(44787)
  ) {
    super()
  }
}
