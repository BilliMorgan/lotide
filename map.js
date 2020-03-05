const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // console.log('array:', array);
  // console.log('callback:', callback);
  
  const results = [];
  for (let item of array){
    results.push(callback(item));
    //console.log('item BEFORE: ', item);
    //console.log('ietm AFTER', callback(item));
    //console.log('---');
  }
  return results;
}
const results1 = map(words, word => word[0]);
//console.log(results1);
