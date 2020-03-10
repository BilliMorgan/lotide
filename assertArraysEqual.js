const eqArrays = require('./eqArrays')

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};

// assertArraysEqual([1, 2, 3], [1, 2, 3, 8, 0]); // fail
// assertArraysEqual([1, 2, 3], [1, 2, 3]);       // pass
// assertArraysEqual(["h", "e", "l", "l"], ["h", "e", "l", "l"]); //pass
// assertArraysEqual(["h", "e", "l", "l"], ["h", "e", "l", "o"]);  //fail
// assertArraysEqual([[], 2, 3], [[], 2, 3]);  
// assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual