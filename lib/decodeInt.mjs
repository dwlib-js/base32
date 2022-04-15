import ToString from '#abstract/ToString';
import DecodeInt from '#abstract-functions/DecodeInt';
import ToAllowedCase from '#abstract-functions/ToAllowedCase';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const decodeInt = (string, errorMode, allowedCase) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return DecodeInt(chars, mode, validCase);
}

export default decodeInt;
