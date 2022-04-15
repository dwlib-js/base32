'use strict';

const ToString = require('#abstract/ToString');
const NormalizeString = require('#abstract-functions/NormalizeString');
const ToAllowedCase = require('#abstract-functions/ToAllowedCase');
const ToErrorMode = require('#abstract-functions/ToErrorMode');
const ToTargetCase = require('#abstract-functions/ToTargetCase');

const normalize = (string, errorMode, allowedCase, targetCase, padding) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  const finalCase = targetCase === undefined ? 'upper' : ToTargetCase(targetCase);
  const usePadding = padding === undefined ? true : !!padding;
  return NormalizeString(chars, mode, validCase, finalCase, usePadding);
}

module.exports = normalize;
