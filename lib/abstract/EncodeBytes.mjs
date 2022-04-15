import TypedArrayLength from '#primordials/TypedArrayLength';
import GetAlphabet from '#internal/GetAlphabet';
import GetPaddingLength from './GetPaddingLength.mjs';

const EncodeBytes = (buffer, targetCase, padding) => {
  const length = TypedArrayLength(buffer);
  const alphabet = GetAlphabet(targetCase);
  let string = '';
  let bits = 0;
  let carry = 0;
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    carry = (carry << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      bits -= 5;
      const charIndex = (carry >>> bits) & 0x1f;
      string += alphabet[charIndex];
    }
  }
  if (bits) {
    const charIndex = (carry << (5 - bits)) & 0x1f;
    string += alphabet[charIndex];
  }
  if (padding) {
    let paddingLength = GetPaddingLength(string.length);
    while (paddingLength) {
      string += '=';
      paddingLength--;
    }
  }
  return string;
}

export default EncodeBytes;
