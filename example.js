const array = ["a", "b", "c", "d", "e", "f"]
const compere = function(array) {
  results = {
  "a": 0,
  "b": 0,
  "c": 0,
  "d": 0,
  "f": 0}
  //console.log(array)
for (let i = 0; i < array.length; i++) {
  results[array[i]] += 1;
  // i (array[i] === results['a']) {f
  // }
  //if (object[array[i] += 1
}
console.log(Object.values(results))
  // for (let i = 0; i < result.lenght; i++) {
  //   
  //   if (object[result[i]]) {
  //     object[result[i]] += 1;
  //   }
  // }
  return results;
};
console.log(compere(array));