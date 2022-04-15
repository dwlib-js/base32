import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';

const DecodeIntBreak = (string, allowedCase) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  let integer = 0;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    integer = integer * 32 + charIndex;
  }
  return integer;
}

export default DecodeIntBreak;
