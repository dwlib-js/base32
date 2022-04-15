'use strict';

const ToString = require('#abstract/ToString');
const DecodeBigInt = require('#abstract-functions/DecodeBigInt');
const ToAllowedCase = require('#abstract-functions/ToAllowedCase');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const decodeBigInt = (string, errorMode, allowedCase) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return DecodeBigInt(chars, mode, validCase);
}

module.exports = decodeBigInt;
