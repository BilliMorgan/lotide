const letterPositions = function (sentence) {
  const results = {};

  for (let item = 0; item < sentence.length; item++) {
    const key = sentence[item];
    if (key !== ' ') {
      if (results[key] === undefined) {
        results[key] = []
      }
      results[key].push(item)
    }
  }
  //   results[key] = [item]
  //     if (results[key].length > 0) {
  //     results[key].push(item)
  //   }
  // 


  // for (const item of sentence.split(" ").join("")) {


  //     if (results[item]) {
  //       results[item] += 1;

  //     }
  // }


  return results;
};
//console.log(letterPositions("lighthouse in the house"));

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
let test = letterPositions("sentence");
console.log(test.e)
// TEST CODE
assertEqual(test.e[2], 7 );