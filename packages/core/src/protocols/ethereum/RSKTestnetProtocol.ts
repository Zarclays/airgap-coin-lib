import { NetworkType, ProtocolBlockExplorer } from '../..'
import { BaseEthereumProtocol } from './BaseEthereumProtocol'
import { EtherscanInfoClient } from './clients/info-clients/EtherscanInfoClient'
import { AirGapNodeClient } from './clients/node-clients/AirGapNodeClient'
import { EthereumProtocolNetwork, EthereumProtocolNetworkExtras, EthereumProtocolOptions, EtherscanBlockExplorer } from './EthereumProtocolOptions'

export class EthereumRopstenProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
  constructor() {
    // we probably need another network here, explorer is ok
    super(
      new EthereumProtocolOptions(
        new EthereumProtocolNetwork(
          "RSK Testnet",
          NetworkType.TESTNET,
          'https://public-node.testnet.rsk.co',
          new EtherscanBlockExplorer("https://explorer.testnet.rsk.co"),
          new EthereumProtocolNetworkExtras(31)
        )
      )
    )
  }
}
