'use strict';

const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const EncodeBytes = require('#abstract-functions/EncodeBytes');
const ToTargetCase = require('#abstract-functions/ToTargetCase');

const encode = (source, targetCase, padding) => {
  const buffer = BufferSourceAsUint8Array(source);
  const finalCase = targetCase === undefined ? 'upper' : ToTargetCase(targetCase);
  const usePadding = padding === undefined ? true : !!padding;
  return EncodeBytes(buffer, finalCase, usePadding);
}

module.exports = encode;
