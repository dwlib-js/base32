import RangeError from '#primordials/RangeError';
import StringToLowerCase from '#primordials/StringToLowerCase';
import ToString from '#abstract/ToString';

const ToTargetCase = argument => {
  const string = ToString(argument);
  const targetCase = StringToLowerCase(string);
  if (targetCase !== 'upper' && targetCase !== 'lower') {
    throw new RangeError('Invalid target case');
  }
  return targetCase;
}

export default ToTargetCase;
