import BigInt from '#primordials/BigInt';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';

const BASE = BigInt(32);
const ZERO = BigInt(0);

const DecodeBigIntIgnore = (string, allowedCase) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let bigint = ZERO;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    bigint = bigint * BASE + BigInt(charIndex);
  }
  return bigint;
}

export default DecodeBigIntIgnore;
