'use strict';

const ToInteger = require('#abstract/ToInteger');
const EncodeInt = require('#abstract-functions/EncodeInt');
const ToTargetCase = require('#abstract-functions/ToTargetCase');

const encodeInt = (integer, targetCase) => {
  const value = ToInteger(integer);
  const finalCase = targetCase === undefined ? 'upper' : ToTargetCase(targetCase);
  return EncodeInt(value, finalCase);
}

module.exports = encodeInt;
