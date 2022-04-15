'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Map = require('#primordials/Map');
const MapSet = require('#primordials/MapSet');
const GetAlphabet = require('./GetAlphabet');

const MapPrototypeGet = GetIntrinsicOrThrow('Map.prototype.get');

const LOWERCASE_ALPHABET = GetAlphabet('lower');
const UPPERCASE_ALPHABET = GetAlphabet('upper');

const LOWERCASE_ALPHABET_LOOKUP = new Map();
const UPPERCASE_ALPHABET_LOOKUP = new Map();
const MIXED_ALPHABET_LOOKUP = new Map();

for (let i = 0; i < 32; i++) {
  const char1 = LOWERCASE_ALPHABET[i];
  const char2 = UPPERCASE_ALPHABET[i];
  MapSet(LOWERCASE_ALPHABET_LOOKUP, char1, i);
  MapSet(UPPERCASE_ALPHABET_LOOKUP, char2, i);
  MapSet(MIXED_ALPHABET_LOOKUP, char1, i);
  if (char2 !== char1) {
    MapSet(MIXED_ALPHABET_LOOKUP, char2, i);
  }
}

const LowercaseAlphabetIndexOf = FunctionBind(MapPrototypeGet, LOWERCASE_ALPHABET_LOOKUP);
const UppercaseAlphabetIndexOf = FunctionBind(MapPrototypeGet, UPPERCASE_ALPHABET_LOOKUP);
const MixedAlphabetIndexOf = FunctionBind(MapPrototypeGet, MIXED_ALPHABET_LOOKUP);

const GetAlphabetIndexOf = allowedCase => (
  allowedCase === 'upper' ? UppercaseAlphabetIndexOf :
  allowedCase === 'lower' ? LowercaseAlphabetIndexOf : MixedAlphabetIndexOf
);

module.exports = GetAlphabetIndexOf;
