// const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
const assert = require('chai').assert;

describe('#middletest', () => {
  it('should return [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8,]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8,]), [4, 5])
  });

  it('should return [4] for [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4])
  });
  
});



// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8,]), [4, 5]);  
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8,]), [4, 8]);  
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);  
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [0]);  