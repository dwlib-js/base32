'use strict';

const ToString = require('#abstract/ToString');
const DecodeBytes = require('#abstract-functions/DecodeBytes');
const ToAllowedCase = require('#abstract-functions/ToAllowedCase');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const decode = (string, errorMode, allowedCase) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return DecodeBytes(chars, mode, validCase);
}

module.exports = decode;
