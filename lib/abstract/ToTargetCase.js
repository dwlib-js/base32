'use strict';

const RangeError = require('#primordials/RangeError');
const StringToLowerCase = require('#primordials/StringToLowerCase');
const ToString = require('#abstract/ToString');

const ToTargetCase = argument => {
  const string = ToString(argument);
  const targetCase = StringToLowerCase(string);
  if (targetCase !== 'upper' && targetCase !== 'lower') {
    throw new RangeError('Invalid target case');
  }
  return targetCase;
}

module.exports = ToTargetCase;
