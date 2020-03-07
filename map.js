const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  // console.log('array:', array);
  // console.log('callback:', callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    //console.log('item BEFORE: ', item);
    //console.log('ietm AFTER', callback(item));
    //console.log('---');
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

// test function bellow
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
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 'r' ]);