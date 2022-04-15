import ToString from '#abstract/ToString';
import IsValidString from '#abstract-functions/IsValidString';
import ToAllowedCase from '#abstract-functions/ToAllowedCase';

const isValid = (string, allowedCase) => {
  const chars = ToString(string);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return IsValidString(chars, validCase);
}

export default isValid;
