const assertEqual = require('./assertEqual')


// const assertEqual = function(
  
//   actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

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

module.exports = eqArrays;
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3,]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);