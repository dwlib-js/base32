import IsBufferSource from '#types/isBufferSource';
import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import ToString from '#abstract/ToString';
import UTF8EncodeString from '#utf8/EncodeString';
import EncodeBytes from '#abstract-functions/EncodeBytes';
import ToTargetCase from '#abstract-functions/ToTargetCase';

const encode = (input, targetCase, padding) => {
  let buffer;
  if (IsBufferSource(input)) {
    buffer = BufferSourceAsUint8Array(input);
  } else {
    const string = ToString(input);
    buffer = UTF8EncodeString(string);
  }
  const finalCase = targetCase === undefined ? 'upper' : ToTargetCase(targetCase);
  const usePadding = padding === undefined ? true : !!padding;
  return EncodeBytes(buffer, finalCase, usePadding);
}

export default encode;
