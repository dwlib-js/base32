import ToString from '#abstract/ToString';
import DecodeBytes from '#abstract-functions/DecodeBytes';
import ToAllowedCase from '#abstract-functions/ToAllowedCase';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const decode = (string, errorMode, allowedCase) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return DecodeBytes(chars, mode, validCase);
}

export default decode;
