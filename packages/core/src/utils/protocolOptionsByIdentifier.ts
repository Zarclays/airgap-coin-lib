import { BSCProtocolConfig, CeloProtocolConfig } from '..'
import { NotFoundError } from '../errors'
import { Domain } from '../errors/coinlib-error'
import { AeternityProtocolNetwork, AeternityProtocolOptions } from '../protocols/aeternity/AeternityProtocolOptions'
import { BitcoinProtocolNetwork, BitcoinProtocolOptions } from '../protocols/bitcoin/BitcoinProtocolOptions'
import { CosmosProtocolNetwork, CosmosProtocolOptions } from '../protocols/cosmos/CosmosProtocolOptions'
import { EthereumProtocolNetwork, EthereumProtocolOptions } from '../protocols/ethereum/EthereumProtocolOptions'
import { RskProtocolConfig } from '../protocols/ethereum/RskProtocolOptions'

import { GroestlcoinProtocolNetwork, GroestlcoinProtocolOptions } from '../protocols/groestlcoin/GroestlcoinProtocolOptions'
import { KusamaProtocolNetwork, KusamaProtocolOptions } from '../protocols/substrate/kusama/KusamaProtocolOptions'
import { MoonbaseProtocolNetwork, MoonbaseProtocolOptions } from '../protocols/substrate/moonbeam/moonbase/MoonbaseProtocolOptions'
import { MoonriverProtocolNetwork, MoonriverProtocolOptions } from '../protocols/substrate/moonbeam/moonriver/MoonriverProtocolOptions'
import { PolkadotProtocolNetwork, PolkadotProtocolOptions } from '../protocols/substrate/polkadot/PolkadotProtocolOptions'
import {
  TezosBTCProtocolConfig,
  TezosETHtzProtocolConfig,
  TezosFAProtocolOptions,
  TezosKolibriUSDProtocolConfig,
  TezosStakerProtocolConfig,
  TezosUSDProtocolConfig,
  TezosUUSDProtocolConfig,
  TezosWrappedProtocolConfig,
  TezosYOUProtocolConfig
} from '../protocols/tezos/fa/TezosFAProtocolOptions'
import { TezosSaplingProtocolOptions, TezosShieldedTezProtocolConfig } from '../protocols/tezos/sapling/TezosSaplingProtocolOptions'
import { TezosProtocolNetwork, TezosProtocolOptions } from '../protocols/tezos/TezosProtocolOptions'

import { assertNever } from './assert'
import { NetworkType, ProtocolNetwork } from './ProtocolNetwork'
import { ProtocolOptions } from './ProtocolOptions'
import { MainProtocolSymbols, ProtocolSymbols, SubProtocolSymbols } from './ProtocolSymbols'

// tslint:disable:cyclomatic-complexity
const getProtocolOptionsByIdentifier: (identifier: ProtocolSymbols, network?: ProtocolNetwork) => ProtocolOptions = (
  identifier: ProtocolSymbols,
  network?: ProtocolNetwork
): ProtocolOptions => {
  switch (identifier) {
    case MainProtocolSymbols.AE:
      return new AeternityProtocolOptions(network ? (network as AeternityProtocolNetwork) : new AeternityProtocolNetwork())
    case MainProtocolSymbols.BTC:
      return new BitcoinProtocolOptions(network ? (network as BitcoinProtocolNetwork) : new BitcoinProtocolNetwork())
    case MainProtocolSymbols.ETH:
    case SubProtocolSymbols.ETH_ERC20_XCHF:
    case SubProtocolSymbols.ETH_ERC20:
      return new EthereumProtocolOptions(network ? (network as EthereumProtocolNetwork) : new EthereumProtocolNetwork())
    case MainProtocolSymbols.GRS:
      return new GroestlcoinProtocolOptions(network ? (network as GroestlcoinProtocolNetwork) : new GroestlcoinProtocolNetwork())
    case MainProtocolSymbols.COSMOS:
      return new CosmosProtocolOptions(network ? (network as CosmosProtocolNetwork) : new CosmosProtocolNetwork())
    case MainProtocolSymbols.POLKADOT:
      return new PolkadotProtocolOptions(network ? (network as PolkadotProtocolNetwork) : new PolkadotProtocolNetwork())
    case MainProtocolSymbols.KUSAMA:
      return new KusamaProtocolOptions(network ? (network as KusamaProtocolNetwork) : new KusamaProtocolNetwork())
    case MainProtocolSymbols.MOONBASE:
      return new MoonbaseProtocolOptions(network ? (network as MoonbaseProtocolNetwork) : new MoonbaseProtocolNetwork())
    case MainProtocolSymbols.MOONRIVER:
      return new MoonriverProtocolOptions(network ? (network as MoonriverProtocolNetwork) : new MoonriverProtocolNetwork())
    case MainProtocolSymbols.XTZ:
    case SubProtocolSymbols.XTZ_KT:
      return new TezosProtocolOptions(network ? (network as TezosProtocolNetwork) : new TezosProtocolNetwork())
    case MainProtocolSymbols.XTZ_SHIELDED:
      return new TezosSaplingProtocolOptions(
        network
          ? (network as TezosProtocolNetwork)
          : new TezosProtocolNetwork('Florencenet', NetworkType.TESTNET, 'https://tezos-florencenet-node.prod.gke.papers.tech'),
        new TezosShieldedTezProtocolConfig()
      )
    case SubProtocolSymbols.XTZ_BTC:
      return new TezosFAProtocolOptions(
        network ? (network as TezosProtocolNetwork) : new TezosProtocolNetwork(),
        new TezosBTCProtocolConfig()
      )
    case SubProtocolSymbols.XTZ_ETHTZ:
      return new TezosFAProtocolOptions(
        network ? (network as TezosProtocolNetwork) : new TezosProtocolNetwork(),
        new TezosETHtzProtocolConfig()
      )
    case SubProtocolSymbols.XTZ_UUSD:
      return new TezosFAProtocolOptions(
        network ? (network as TezosProtocolNetwork) : new TezosProtocolNetwork(),
        new TezosUUSDProtocolConfig()
      )
    case SubProtocolSymbols.XTZ_YOU:
      return new TezosFAProtocolOptions(
        network ? (network as TezosProtocolNetwork) : new TezosProtocolNetwork(),
        new TezosYOUProtocolConfig()
      )
    case SubProtocolSymbols.XTZ_W:
      return new TezosFAProtocolOptions(
        network ? (network as TezosProtocolNetwork) : new TezosProtocolNetwork(),
        new TezosWrappedProtocolConfig()
      )
    case SubProtocolSymbols.XTZ_KUSD:
      return new TezosFAProtocolOptions(
        network ? (network as TezosProtocolNetwork) : new TezosProtocolNetwork(),
        new TezosKolibriUSDProtocolConfig()
      )
    case SubProtocolSymbols.XTZ_USD:
      return new TezosFAProtocolOptions(
        network ? (network as TezosProtocolNetwork) : new TezosProtocolNetwork(),
        new TezosUSDProtocolConfig()
      )
    case SubProtocolSymbols.XTZ_STKR:
      return new TezosFAProtocolOptions(
        network ? (network as TezosProtocolNetwork) : new TezosProtocolNetwork(),
        new TezosStakerProtocolConfig()
      )

    case MainProtocolSymbols.RSK:
      // return new EthereumProtocolOptions(
      //   new EthereumProtocolNetwork(
      //     "RSK Mainnet",
      //     NetworkType.MAINNET,
      //     'https://public-node.rsk.co',
      //     new EtherscanBlockExplorer("https://explorer.rsk.co"),
      //     new EthereumProtocolNetworkExtras(30)
      //   )
      //   // ,
      //   // new  RskProtocoloConfig()

      // )
      // console.log('prot opti by id: ', network)
      return new EthereumProtocolOptions(network ? (network as EthereumProtocolNetwork) : new RskProtocolConfig())

    case MainProtocolSymbols.CELO:
    case SubProtocolSymbols.CELO_ERC20:
      return new EthereumProtocolOptions(network ? (network as EthereumProtocolNetwork) : new CeloProtocolConfig())
    case MainProtocolSymbols.BSC:
    case SubProtocolSymbols.BSC_BEP20:
      return new EthereumProtocolOptions(network ? (network as EthereumProtocolNetwork) : new BSCProtocolConfig())

    default:
      // Maybe we get an identifier of a sub-protocol that is not in the known list. In that case, get the options of the parent
      if ((identifier as string).includes('-')) {
        return getProtocolOptionsByIdentifier((identifier as string).split('-')[0] as any)
      }
      assertNever(identifier)
      throw new NotFoundError(Domain.UTILS, `No protocol options found for ${identifier}`)
  }
}

export { getProtocolOptionsByIdentifier }
