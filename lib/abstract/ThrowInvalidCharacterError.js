'use strict';

const RangeError = require('#primordials/RangeError');

const ThrowInvalidCharacterError = index => {
  throw new RangeError(`Invalid Base32 character at index ${index}`);
}

module.exports = ThrowInvalidCharacterError;
