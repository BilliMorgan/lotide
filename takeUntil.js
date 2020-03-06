//1. The function has to take an array as argument
//2. Loop through the array
//3. stop execution at defined point in the callback function
//4. print the new array

const takeUntil = function (array, callback) {
  const results1 = [];
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i]) === true) {break;}
    results1.push(array[i]);
    
  }
  return results1;
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);