import ToString from '#abstract/ToString';
import NormalizeString from '#abstract-functions/NormalizeString';
import ToAllowedCase from '#abstract-functions/ToAllowedCase';
import ToErrorMode from '#abstract-functions/ToErrorMode';
import ToTargetCase from '#abstract-functions/ToTargetCase';

const normalize = (string, errorMode, allowedCase, targetCase, padding) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  const finalCase = targetCase === undefined ? 'upper' : ToTargetCase(targetCase);
  const usePadding = padding === undefined ? true : !!padding;
  return NormalizeString(chars, mode, validCase, finalCase, usePadding);
}

export default normalize;
