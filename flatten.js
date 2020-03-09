//const assertArraysEqual = require('./assertArraysEqual.js');

//const flatten = function(input) {
  //return input.flat()
const input = [1, 2, [3, 4], 5, [6]]
console.log(input.reduce((input, val) => input.concat(val), []));
  //console.log(input)
  //let newArray = [];
  // for (let element in input) {
  //   if (Array.isArray(element) === true) {
  //     console.log(input[element])
  //   }
  // }
  //console.log(newArray)
//};


//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]