'use strict';

const ToString = require('#abstract/ToString');
const DecodeInt = require('#abstract-functions/DecodeInt');
const ToAllowedCase = require('#abstract-functions/ToAllowedCase');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const decodeInt = (string, errorMode, allowedCase) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return DecodeInt(chars, mode, validCase);
}

module.exports = decodeInt;
