import ToString from '#abstract/ToString';
import DecodeBigInt from '#abstract-functions/DecodeBigInt';
import ToAllowedCase from '#abstract-functions/ToAllowedCase';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const decodeBigInt = (string, errorMode, allowedCase) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return DecodeBigInt(chars, mode, validCase);
}

export default decodeBigInt;
