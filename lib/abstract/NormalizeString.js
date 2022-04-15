'use strict';

const NormalizeStringBreak = require('./NormalizeStringBreak');
const NormalizeStringIgnore = require('./NormalizeStringIgnore');
const NormalizeStringStrict = require('./NormalizeStringStrict');

const NormalizeString = (string, errorMode, allowedCase, targetCase, padding) => {
  const normalize = (
    errorMode === 'strict' ? NormalizeStringStrict :
    errorMode === 'ignore' ? NormalizeStringIgnore : NormalizeStringBreak
  );
  return normalize(string, allowedCase, targetCase, padding);
}

module.exports = NormalizeString;
