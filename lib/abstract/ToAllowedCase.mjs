import RangeError from '#primordials/RangeError';
import StringToLowerCase from '#primordials/StringToLowerCase';
import ToString from '#abstract/ToString';

const ToAllowedCase = argument => {
  const string = ToString(argument);
  const allowedCase = StringToLowerCase(string);
  if (
    allowedCase !== 'upper' &&
    allowedCase !== 'lower' &&
    allowedCase !== 'mixed'
  ) {
    throw new RangeError('Invalid allowed case');
  }
  return allowedCase;
}

export default ToAllowedCase;
