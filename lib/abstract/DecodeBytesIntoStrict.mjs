import TypedArrayLength from '#primordials/TypedArrayLength';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const DecodeBytesIntoStrict = (string, destination, allowedCase) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let index = 0;
  let destinationIndex = 0;
  let bits = 0;
  let carry = 0;
  while (index < length && destinationIndex < destinationLength) {
    const char = string[index];
    if (char === '=') {
      bits = 0;
      index++;
      continue;
    }
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(index);
    }
    carry = (carry << 5) | charIndex;
    bits += 5;
    if (bits >= 8) {
      bits -= 8;
      destination[destinationIndex++] = (carry >>> bits) & 0xff;
    }
    index++;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

export default DecodeBytesIntoStrict;
