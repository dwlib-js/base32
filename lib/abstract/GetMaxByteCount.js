'use strict';

const MathFloor = require('#primordials/MathFloor');

const GetMaxByteCount = charCount => MathFloor(charCount / 8 * 5);

module.exports = GetMaxByteCount;
