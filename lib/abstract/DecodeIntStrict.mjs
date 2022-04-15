import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import ThrowInvalidCharacterError from './ThrowInvalidCharacterError.mjs';

const DecodeIntStrict = (string, allowedCase) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let integer = 0;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      ThrowInvalidCharacterError(i);
    }
    integer = integer * 32 + charIndex;
  }
  return integer;
}

export default DecodeIntStrict;
