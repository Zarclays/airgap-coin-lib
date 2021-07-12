import { MainProtocolSymbols, NetworkType } from '../..'
import { BaseEthereumProtocol } from './BaseEthereumProtocol'
import { EtherscanInfoClient } from './clients/info-clients/EtherscanInfoClient'
import { AirGapNodeClient } from './clients/node-clients/AirGapNodeClient'
import { EthereumProtocolNetwork, EthereumProtocolNetworkExtras,EthereumProtocolConfig, EthereumProtocolOptions, EtherscanBlockExplorer } from './EthereumProtocolOptions'

export class RskProtocoloConfig extends EthereumProtocolConfig {
  
  constructor(public readonly symbol: string="RBTC",
    public readonly name: string="RSK",
    public readonly marketSymbol: string="RBTC",
    // public readonly identifier: SubProtocolSymbols,
    // public readonly contractAddress: string,
    public readonly decimals: number=18) {
    super();
  }
}

export class RSKProtocol extends BaseEthereumProtocol<AirGapNodeClient, EtherscanInfoClient> {
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
        // ,
        // new  RskProtocoloConfig() 


      )
    );
    this.name="RSK Mainnet"
    this.standardDerivationPath= `m/44'/137'/0'/0`
    this.symbol="RBTC"
    this.feeSymbol="RBTC"
    this.marketSymbol="RBTC"
    this.identifier = MainProtocolSymbols.BTC;

  }
}
