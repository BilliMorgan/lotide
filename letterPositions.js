

const letterPositions = function (sentence) {
  const results = {};
  for (let item = 0; item < sentence.length; item++) {
    const key = sentence[item];
    if (key !== ' ') {
      if (results[key] === undefined) {
        results[key] = [];
      }
      results[key].push(item)
    }
  }
  return results;
};
console.log(letterPositions("hello"));
// TEST CODE
const eqArrays = function (actual, expected) {
  let output = true;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        output = false;
      }
    }
  }
  else {
    output = false;
  }
  return output;
};
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").e, [1]);



