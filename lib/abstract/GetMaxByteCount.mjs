import MathFloor from '#primordials/MathFloor';

const GetMaxByteCount = charCount => MathFloor(charCount / 8 * 5);

export default GetMaxByteCount;
