'use strict';

const LOWERCASE_ALPHABET = 'abcdefghijklmnopqrstuvwxyz234567';
const UPPERCASE_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const GetAlphabet = targetCase => targetCase === 'lower' ? LOWERCASE_ALPHABET : UPPERCASE_ALPHABET;

module.exports = GetAlphabet;
