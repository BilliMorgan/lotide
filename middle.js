const assertArraysEqual = require('./assertArraysEqual.js');

const middle = function(array) {
  let middle = [];
  if (array.length % 2 === 0) {
    let number = array.length / 2;
    middle.push(array[Math.floor(number - 1)],array[Math.floor(number)]);
  } else {
    let number = array.length / 2;

    middle.push(array[Math.floor(number)]);
  }
  return middle;
};

module.exports = middle;

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8,]), [4, 5]);       // pass
