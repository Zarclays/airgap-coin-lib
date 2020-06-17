// tslint:disable:max-classes-per-file

import { ProtocolBlockExplorer } from '../../../utils/ProtocolBlockExplorer'
import { NetworkType, ProtocolNetwork } from '../../../utils/ProtocolNetwork'
import { ProtocolOptions } from '../../../utils/ProtocolOptions'
import { SubstrateBlockExplorerClient } from '../helpers/blockexplorer/SubstrateBlockExplorerClient'
import { SubstrateNodeClient } from '../helpers/node/SubstrateNodeClient'
import { SubstrateAccountController } from '../helpers/SubstrateAccountController'
import { SubstrateTransactionController } from '../helpers/SubstrateTransactionController'
import { SubstrateNetwork } from '../SubstrateNetwork'

const MAINNET_NAME: string = 'Mainnet'

const NODE_URL: string = ''

const BLOCK_EXPLORER_URL: string = ''
const BLOCK_EXPLORER_API: string = ''

export class PolkadotProtocolNetworkExtras {
  constructor(public readonly apiUrl: string = BLOCK_EXPLORER_API) {}
}

export class PolkascanBlockExplorer implements ProtocolBlockExplorer {
  constructor(public readonly blockExplorer: string = BLOCK_EXPLORER_URL) {}

  public async getAddressLink(address: string): Promise<string> {
    return `${this.blockExplorer}/account/${address}`
  }
  public async getTransactionLink(transactionId: string): Promise<string> {
    return `${this.blockExplorer}/extrinsic/${transactionId}`
  }
}

export class PolkadotProtocolConfig {
  constructor(
    public readonly network: SubstrateNetwork = SubstrateNetwork.POLKADOT,
    public readonly nodeClient: SubstrateNodeClient = new SubstrateNodeClient(network, NODE_URL),
    public readonly blockExplorerClient: SubstrateBlockExplorerClient = new SubstrateBlockExplorerClient(
      network,
      BLOCK_EXPLORER_URL,
      BLOCK_EXPLORER_API
    ),
    public readonly accountController: SubstrateAccountController = new SubstrateAccountController(network, nodeClient),
    public readonly transactionController: SubstrateTransactionController = new SubstrateTransactionController(network, nodeClient)
  ) {}
}

export class PolkadotProtocolNetwork implements ProtocolNetwork<PolkadotProtocolNetworkExtras> {
  constructor(
    public readonly name: string = MAINNET_NAME,
    public readonly type: NetworkType = NetworkType.MAINNET,
    public readonly rpcUrl: string = NODE_URL,
    public readonly blockExplorer: ProtocolBlockExplorer = new PolkascanBlockExplorer(),
    public readonly extras: PolkadotProtocolNetworkExtras = new PolkadotProtocolNetworkExtras()
  ) {}
}

export class PolkadotProtocolOptions implements ProtocolOptions<PolkadotProtocolConfig> {
  constructor(
    public readonly network: PolkadotProtocolNetwork = new PolkadotProtocolNetwork(),
    public readonly config: PolkadotProtocolConfig = new PolkadotProtocolConfig()
  ) {}
}
