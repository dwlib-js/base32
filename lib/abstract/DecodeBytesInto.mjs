import DecodeBytesIntoBreak from './DecodeBytesIntoBreak.mjs';
import DecodeBytesIntoIgnore from './DecodeBytesIntoIgnore.mjs';
import DecodeBytesIntoStrict from './DecodeBytesIntoStrict.mjs';

const DecodeBytesInto = (string, destination, errorMode, allowedCase) => {
  const decodeInto = (
    errorMode === 'strict' ? DecodeBytesIntoStrict :
    errorMode === 'ignore' ? DecodeBytesIntoIgnore : DecodeBytesIntoBreak
  );
  return decodeInto(string, destination, allowedCase);
}

export default DecodeBytesInto;
