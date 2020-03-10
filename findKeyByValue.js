const assertEqual = require('./assertEqual')

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = function (bestTVShowsByGenre, showName) {
  const keysArray = Object.keys(bestTVShowsByGenre)
  for (let key of keysArray) {
    if (bestTVShowsByGenre[key] === showName) {
      return key;
    }
  }
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.export = findKeyByValue