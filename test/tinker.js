// let arrTinker = [1, 2, 3, 4, 5, 6]

// return console.log(Array.isArray([1, 2, 3, 4, 5, 6]))


// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };

// console.log(Object.keys(object1));
// // expected output: Array ["a", "b", "c"]

// let cat = 'Miaow';
// let dog = 'Woof';
// let bird = 'Peet peet';

// let someObject = {
//   cat,
//   dog,
//   bird
// }

// console.log(someObject);

// const obj = { x: 4, y: 1 };
// const {x,y} = obj;
// console.log(x); // 4
// console.log(y); // 1


const index = require('../index')
const assert = require('chai').assert;

describe('#middletest', () => {
  it('should return [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8,]', () => {
    assert.deepEqual(index.middle([1, 2, 3, 4, 5, 6, 7, 8,]), [4, 5])
  });

  it('should return [4] for [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual(index.middle([1, 2, 3, 4, 5, 6, 7]), [4])
  });
  
});

