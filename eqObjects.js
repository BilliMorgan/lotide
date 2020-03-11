const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual((eqObjects(ab, abc)), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual((eqObjects(cd, dc)), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual((eqObjects(cd, cd2)), false); // => false

module.exports = eqObjects;