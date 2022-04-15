import ToString from '#abstract/ToString';
import ToAllowedCase from '#abstract-functions/ToAllowedCase';
import ValidateString from '#abstract-functions/ValidateString';

const validate = (string, allowedCase) => {
  const chars = ToString(string);
  const validCase = allowedCase === undefined ? 'mixed' : ToAllowedCase(allowedCase);
  return ValidateString(chars, validCase);
}

export default validate;
