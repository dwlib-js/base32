'use strict';

const RangeError = require('#primordials/RangeError');
const StringToLowerCase = require('#primordials/StringToLowerCase');
const ToString = require('#abstract/ToString');

const ToAllowedCase = argument => {
  const string = ToString(argument);
  const allowedCase = StringToLowerCase(string);
  if (
    allowedCase !== 'upper' &&
    allowedCase !== 'lower' &&
    allowedCase !== 'mixed'
  ) {
    throw new RangeError('Invalid allowed case');
  }
  return allowedCase;
}

module.exports = ToAllowedCase;
