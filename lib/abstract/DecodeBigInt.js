'use strict';

const DecodeBigIntBreak = require('./DecodeBigIntBreak');
const DecodeBigIntIgnore = require('./DecodeBigIntIgnore');
const DecodeBigIntStrict = require('./DecodeBigIntStrict');

const DecodeBigInt = (string, errorMode, allowedCase) => {
  const decodeBigInt = (
    errorMode === 'strict' ? DecodeBigIntStrict :
    errorMode === 'ignore' ? DecodeBigIntIgnore : DecodeBigIntBreak
  );
  return decodeBigInt(string, allowedCase);
}

module.exports = DecodeBigInt;
