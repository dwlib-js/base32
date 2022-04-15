'use strict';

const ToString = require('#abstract/ToString');
const ToAllowedCase = require('#abstract-functions/ToAllowedCase');
const ValidateString = require('#abstract-functions/ValidateString');

const validate = (string, allowedCase) => {
  const chars = ToString(string);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return ValidateString(chars, validCase);
}

module.exports = validate;
