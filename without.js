const assertArraysEqual = require('./assertArraysEqual.js');

const without = function (basket, trash) {
  let goodStaff = [];

  for (let items in basket) {
    let boolin = false;

    for (let elements in trash) {
      if (basket[items] === trash[elements]) {
        boolin = true;
    }
  }
    if (boolin === false) {
      goodStaff.push(basket[items])
    }
  }
  //console.log(goodStaff);
  return goodStaff;
};

//console.log(without(["one", "two", "three"], ["two", "three"]))

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, "2", "3"]))
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));


//const words = ["hello", "world", "lighthouse"];
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
