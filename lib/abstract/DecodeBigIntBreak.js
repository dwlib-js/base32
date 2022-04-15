'use strict';

const BigInt = require('#primordials/BigInt');
const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');

const BASE = BigInt(32);
const ZERO = BigInt(0);

const DecodeBigIntBreak = (string, allowedCase) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let bigint = ZERO;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    bigint = bigint * BASE + BigInt(charIndex);
  }
  return bigint;
}

module.exports = DecodeBigIntBreak;
