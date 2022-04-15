'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const HasIntrinsic = require('#intrinsics/HasIntrinsic');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const Base32Decode = require('./decode');
const Base32DecodeInt = require('./decodeInt');
const Base32DecodeInto = require('./decodeInto');
const Base32Encode = require('./encode');
const Base32EncodeInt = require('./encodeInt');
const Base32IsValid = require('./isValid');
const Base32Normalize = require('./normalize');
const Base32Validate = require('./validate');

const hasBigInt = HasIntrinsic('BigInt');

const Base32DecodeBigInt = hasBigInt ? require('./decodeBigInt') : undefined;
const Base32EncodeBigInt = hasBigInt ? require('./encodeBigInt') : undefined;

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

module.exports = Base32;
