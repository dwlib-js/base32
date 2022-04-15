import ToInteger from '#abstract/ToInteger';
import EncodeInt from '#abstract-functions/EncodeInt';
import ToTargetCase from '#abstract-functions/ToTargetCase';

const encodeInt = (integer, targetCase) => {
  const value = ToInteger(integer);
  const finalCase = targetCase === undefined ? 'upper' : ToTargetCase(targetCase);
  return EncodeInt(value, finalCase);
}

export default encodeInt;
