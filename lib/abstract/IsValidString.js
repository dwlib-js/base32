'use strict';

const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');

const IsValidString = (string, allowedCase) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  for (let i = 0; i < length; i++) {
    const char = string[i];
    if (char === '=') {
      continue;
    }
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      return false;
    }
  }
  return true;
}

module.exports = IsValidString;
