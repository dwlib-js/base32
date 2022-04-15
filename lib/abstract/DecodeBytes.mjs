import DecodeBytesBreak from './DecodeBytesBreak.mjs';
import DecodeBytesIgnore from './DecodeBytesIgnore.mjs';
import DecodeBytesStrict from './DecodeBytesStrict.mjs';

const DecodeBytes = (string, errorMode, allowedCase) => {
  const decode = (
    errorMode === 'strict' ? DecodeBytesStrict :
    errorMode === 'ignore' ? DecodeBytesIgnore : DecodeBytesBreak
  );
  return decode(string, allowedCase);
}

export default DecodeBytes;
