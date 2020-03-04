const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(string) {
  const results = {};
  
  for (const item of string.split(" ").join("")) {
    //console.log(item);
    if (results[item] !== " ") {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    //console.log(results[item] !== " ")
  }
  return results;
}
//console.log(results)
console.log(countLetters("lighthouse in the house"));
const result1 = countLetters("Hello")
assertEqual(result1["h"], 1)