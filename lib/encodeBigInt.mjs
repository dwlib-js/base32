import ToBigInt from '#abstract/ToBigInt';
import EncodeBigInt from '#abstract-functions/EncodeBigInt';
import ToTargetCase from '#abstract-functions/ToTargetCase';

const encodeBigInt = (bigint, targetCase) => {
  const value = ToBigInt(bigint);
  const finalCase = targetCase === undefined ? 'upper' : ToTargetCase(targetCase);
  return EncodeBigInt(value, finalCase);
}

export default encodeBigInt;
