'use strict';

const GetPaddingLength = length => {
  const remainder = length % 8;
  return remainder ? 8 - remainder : 0;
}

module.exports = GetPaddingLength;
