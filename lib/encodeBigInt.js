'use strict';

const ToBigInt = require('#abstract/ToBigInt');
const EncodeBigInt = require('#abstract-functions/EncodeBigInt');
const ToTargetCase = require('#abstract-functions/ToTargetCase');

const encodeBigInt = (bigint, targetCase) => {
  const value = ToBigInt(bigint);
  const finalCase = targetCase === undefined ? 'upper' : ToTargetCase(targetCase);
  return EncodeBigInt(value, finalCase);
}

module.exports = encodeBigInt;
