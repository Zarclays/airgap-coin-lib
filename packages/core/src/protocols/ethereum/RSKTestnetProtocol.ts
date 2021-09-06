import { NetworkType, RSKProtocol } from '../..'
// import { BaseEthereumProtocol } from './BaseEthereumProtocol'
// import { EtherscanInfoClient } from './clients/info-clients/EtherscanInfoClient'
// import { AirGapNodeClient } from './clients/node-clients/AirGapNodeClient'
// import { EthereumProtocolNetwork, EthereumProtocolNetworkExtras, EthereumProtocolOptions, EtherscanBlockExplorer } from './EthereumProtocolOptions'

export class RSKTestnetProtocol extends RSKProtocol {
  constructor() {
    // we probably need another network here, explorer is ok
    super('RSK Testnet', NetworkType.TESTNET, 'https://public-node.testnet.rsk.co', 'https://explorer.testnet.rsk.co', 31)

    // this.name="RSK Testnet"
    // this.standardDerivationPath= `m/44'/37310'/0'/0/N`
    // this.symbol="RBTC"
    // this.feeSymbol="RBTC"
    // this.marketSymbol="RBTC"
    // this.identifier = MainProtocolSymbols.RSK;
  }
}
