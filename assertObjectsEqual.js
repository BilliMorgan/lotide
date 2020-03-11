//const eqObjects = require('.eqObjects')
//const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');



const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(object1)}`);
  if (eqObjects(object1, object2) === true) {
    return console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const eqObjects = function(object1, object2) {
  let booLean = true;
  let objectKeys1 = Object.keys(object1);             //function which should make arrays.key from both objects and compere them
  let objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {    //compering objects lengths
    return false;
  }
  objectKeys1.forEach((element) => {
    if (Array.isArray(object1[element]) === true && Array.isArray(object2[element]) === true) {
      booLean = eqArrays(object1[element], object2[element]);
    } else {
      if (object1[element] !== object2[element]) {
        booLean = false;
      }
    }
  });
  return booLean;                     //should RETURN true or false
};

module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true
