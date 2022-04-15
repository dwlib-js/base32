'use strict';

const DecodeBytesIntoBreak = require('./DecodeBytesIntoBreak');
const DecodeBytesIntoIgnore = require('./DecodeBytesIntoIgnore');
const DecodeBytesIntoStrict = require('./DecodeBytesIntoStrict');

const DecodeBytesInto = (string, destination, errorMode, allowedCase) => {
  const decodeInto = (
    errorMode === 'strict' ? DecodeBytesIntoStrict :
    errorMode === 'ignore' ? DecodeBytesIntoIgnore : DecodeBytesIntoBreak
  );
  return decodeInto(string, destination, allowedCase);
}

module.exports = DecodeBytesInto;
