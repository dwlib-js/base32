'use strict';

const ToString = require('#abstract/ToString');
const IsValidString = require('#abstract-functions/IsValidString');
const ToAllowedCase = require('#abstract-functions/ToAllowedCase');

const isValid = (string, allowedCase) => {
  const chars = ToString(string);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return IsValidString(chars, validCase);
}

module.exports = isValid;
