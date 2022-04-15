'use strict';

const GetAlphabet = require('#internal/GetAlphabet');
const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');
const GetPaddingLength = require('./GetPaddingLength');

const NormalizeStringBreak = (string, allowedCase, targetCase, padding) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedCase);
  const alphabet = GetAlphabet(targetCase);
  let normalized = '';
  let sequenceLength = 0;
  let paddingLength = 0;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    if (char === '=') {
      if (sequenceLength) {
        paddingLength = GetPaddingLength(sequenceLength);
        sequenceLength = 0;
      }
      continue;
    }
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    while (paddingLength) {
      normalized += '=';
      paddingLength--;
    }
    normalized += alphabet[charIndex];
    sequenceLength++;
  }
  if (padding) {
    if (!paddingLength) {
      paddingLength = GetPaddingLength(normalized.length);
    }
    while (paddingLength) {
      normalized += '=';
      paddingLength--;
    }
  }
  return normalized;
}

module.exports = NormalizeStringBreak;
