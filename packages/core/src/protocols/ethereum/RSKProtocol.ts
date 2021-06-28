import { NetworkType } from '../..'
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
          "RSK Mainnet",
          NetworkType.MAINNET,
          'https://public-node.rsk.co',
          new EtherscanBlockExplorer("https://explorer.rsk.co"),
          new EthereumProtocolNetworkExtras(30)
        )
      )
    )
  }
}
