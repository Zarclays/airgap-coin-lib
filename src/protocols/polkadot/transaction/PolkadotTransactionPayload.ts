import { SCALEClass } from "../codec/type/SCALEClass"
import { PolkadotTransactionMethod } from "./method/PolkadotTransactionMethod"
import { SCALEEra } from "../codec/type/SCALEEra"
import BigNumber from "../../../dependencies/src/bignumber.js-9.0.0/bignumber"
import { SCALECompactInt } from "../codec/type/SCALECompactInt"
import { SCALEInt } from "../codec/type/SCALEInt"
import { SCALEHash } from "../codec/type/SCALEHash"
import { PolkadotTransaction, PolkadotTransactionType } from "./PolkadotTransaction"
import { SCALEDecodeResult, SCALEDecoder } from "../codec/SCALEDecoder"

interface PayloadConfig {
    lastHash: string,
    genesisHash: string,
    specVersion: number | BigNumber
}

export class PolkadotTransactionPayload extends SCALEClass {
    
    public static create(transaction: PolkadotTransaction, config: PayloadConfig): PolkadotTransactionPayload {
        return new PolkadotTransactionPayload(
            transaction.method, 
            transaction.era, 
            transaction.nonce, 
            transaction.tip,
            SCALEInt.from(config.specVersion, 32), 
            SCALEHash.from(config.genesisHash), 
            SCALEHash.from(transaction.era.isMortal ? config.lastHash : config.genesisHash)
        )
    }

    public static decode(type: PolkadotTransactionType, hex: string): SCALEDecodeResult<PolkadotTransactionPayload> {
        const decoder = new SCALEDecoder(hex)

        const method = decoder.decodeNextObject(hex => PolkadotTransactionMethod.decode(type, hex))
        const era = decoder.decodeNextEra()
        const nonce = decoder.decodeNextCompactInt()
        const tip = decoder.decodeNextCompactInt()
        const specVersion = decoder.decodeNextInt(32)
        const genesisHash = decoder.decodeNextHash(256)
        const blockHash = decoder.decodeNextHash(256)

        return {
            bytesDecoded: method.bytesDecoded + era.bytesDecoded + nonce.bytesDecoded + tip.bytesDecoded + specVersion.bytesDecoded + genesisHash.bytesDecoded + blockHash.bytesDecoded,
            decoded: new PolkadotTransactionPayload(
                method.decoded,
                era.decoded,
                nonce.decoded,
                tip.decoded,
                specVersion.decoded,
                genesisHash.decoded,
                blockHash.decoded
            )
        }
    }

    protected readonly scaleFields = [this.method, this.era, this.nonce, this.tip, this.specVersion, this.genesisHash, this.blockHash]

    private constructor(
        readonly method: PolkadotTransactionMethod,
        readonly era: SCALEEra,
        readonly nonce: SCALECompactInt,
        readonly tip: SCALECompactInt,
        readonly specVersion: SCALEInt,
        readonly genesisHash: SCALEHash,
        readonly blockHash: SCALEHash
    ) { super() }
}