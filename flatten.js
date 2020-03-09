const assertArraysEqual = require('./assertArraysEqual.js');

const flatten = function (input) {
  let arrConcat = [];
  for (let element of input) {
    if (Array.isArray(element) === true) {
      arrConcat.push(...element)
    } else {
      arrConcat.push(element)
    }
  }
  return arrConcat
};

//console.log(input.reduce((input, val) => input.concat(val), []));//second option to fullfil this task

flatten([1, 2, [3, 4], 5, ["hi"]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten(["hello", "world", ["lighthouse"]]), ["hello", "world", "lighthouse"]);
