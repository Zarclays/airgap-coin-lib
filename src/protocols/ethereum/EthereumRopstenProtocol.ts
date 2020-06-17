import { BaseEthereumProtocol } from './BaseEthereumProtocol'
import { EtherscanInfoClient } from './clients/info-clients/EtherscanInfoClient'
import { AirGapNodeClient } from './clients/node-clients/AirGapNodeClient'
import { EthereumProtocolConfig, EthereumProtocolNetwork, EthereumProtocolOptions } from './EthereumProtocolOptions'

export class EthereumRopstenProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
  constructor() {
    // we probably need another network here, explorer is ok
    super(
      new EthereumProtocolOptions(
        new EthereumProtocolNetwork(),
        new EthereumProtocolConfig(
          3,
          new AirGapNodeClient('https://ropsten.infura.io'),
          new EtherscanInfoClient('https://api-ropsten.etherscan.io/')
        )
      )
    )
  }
}
