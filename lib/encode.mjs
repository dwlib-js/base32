import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import EncodeBytes from '#abstract-functions/EncodeBytes';
import ToTargetCase from '#abstract-functions/ToTargetCase';

const encode = (source, targetCase, padding) => {
  const buffer = BufferSourceAsUint8Array(source);
  const finalCase = targetCase === undefined ? 'upper' : ToTargetCase(targetCase);
  const usePadding = padding === undefined ? true : !!padding;
  return EncodeBytes(buffer, finalCase, usePadding);
}

export default encode;
