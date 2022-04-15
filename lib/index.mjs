import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import HasIntrinsic from '#intrinsics/HasIntrinsic';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import Base32Decode from './decode.mjs';
import Base32DecodeInt from './decodeInt.mjs';
import Base32DecodeInto from './decodeInto.mjs';
import Base32Encode from './encode.mjs';
import Base32EncodeInt from './encodeInt.mjs';
import Base32IsValid from './isValid.mjs';
import Base32Normalize from './normalize.mjs';
import Base32Validate from './validate.mjs';

const ImportFunction = async name => {
  const module = await import(`./${name}.mjs`);
  return module.default;
}

const hasBigInt = HasIntrinsic('BigInt');

const Base32DecodeBigInt = hasBigInt ? await ImportFunction('decodeBigInt') : undefined;
const Base32EncodeBigInt = hasBigInt ? await ImportFunction('encodeBigInt') : undefined;

const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

const Base32 = ObjectCreate(ObjectPrototype, {
  decode: {
    value: Base32Decode
  },
  decodeBigInt: {
    value: Base32DecodeBigInt
  },
  decodeInt: {
    value: Base32DecodeInt
  },
  decodeInto: {
    value: Base32DecodeInto
  },
  encode: {
    value: Base32Encode
  },
  encodeBigInt: {
    value: Base32EncodeBigInt
  },
  encodeInt: {
    value: Base32EncodeInt
  },
  isValid: {
    value: Base32IsValid
  },
  normalize: {
    value: Base32Normalize
  },
  validate: {
    value: Base32Validate
  }
});
ReflectDefineProperty(Base32, SymbolToStringTag, {
  value: 'Base32'
});

export default Base32;
