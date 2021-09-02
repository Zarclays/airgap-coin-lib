// import {
//   EthereumProtocolNetworkExtras,
//   EtherscanBlockExplorer,
//   MainProtocolSymbols,
//   NetworkType,
//   RSKProtocol,
//   RskProtocolConfig
// } from '../..'
// // import { BaseEthereumProtocol } from './BaseEthereumProtocol'
// // import { EtherscanInfoClient } from './clients/info-clients/EtherscanInfoClient'
// // import { AirGapNodeClient } from './clients/node-clients/AirGapNodeClient'
// // import { EthereumProtocolNetwork, EthereumProtocolNetworkExtras, EthereumProtocolOptions, EtherscanBlockExplorer } from './EthereumProtocolOptions'

// export class RskTestnetProtocolConfig extends RskProtocolConfig {
//   constructor(
//     public readonly symbol: string = 'RBTC',
//     public readonly name: string = 'RSK',
//     public readonly marketSymbol: string = 'RBTC',
//     public readonly identifier = MainProtocolSymbols.RSK,
//     // public readonly contractAddress: string,
//     public readonly decimals: number = 18,
//     public readonly type: NetworkType = NetworkType.TESTNET,
//     public readonly rpcUrl: string = 'https://public-node.testnet.rsk.co',
//     public readonly blockExplorer = new EtherscanBlockExplorer('https://explorer.testnet.rsk.co'),
//     public readonly extras = new EthereumProtocolNetworkExtras(31)
//   ) {
//     super()
//   }
// }

// export class RSKTestnetProtocol extends RSKProtocol {
//   constructor() {
//     // we probably need another network here, explorer is ok
//     super('RSK Testnet', NetworkType.TESTNET, 'https://public-node.testnet.rsk.co', 'https://explorer.testnet.rsk.co', 31)

//     // this.name="RSK Testnet"
//     // this.standardDerivationPath= `m/44'/37310'/0'/0/N`
//     // this.symbol="RBTC"
//     // this.feeSymbol="RBTC"
//     // this.marketSymbol="RBTC"
//     // this.identifier = MainProtocolSymbols.RSK;
//   }
// }
