'use strict';

const TypedArraySlice = require('#primordials/TypedArraySlice');
const Uint8Array = require('#primordials/Uint8Array');
const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');
const GetMaxByteCount = require('./GetMaxByteCount');

const DecodeBytesIgnore = (string, allowedCase) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  const maxByteCount = GetMaxByteCount(length);
  const bytes = new Uint8Array(maxByteCount);
  let index = 0;
  let bits = 0;
  let carry = 0;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    if (char === '=') {
      bits = 0;
      continue;
    }
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    carry = (carry << 5) | charIndex;
    bits += 5;
    if (bits >= 8) {
      bits -= 8;
      bytes[index++] = (carry >>> bits) & 0xff;
    }
  }
  return index !== maxByteCount ? TypedArraySlice(bytes, 0, index) : bytes;
}

module.exports = DecodeBytesIgnore;
