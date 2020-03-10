const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
console.log(typeof findKeyByValue)
describe("#showType by showName", () => {
  it("returns 'drama' for 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    
  });
  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5'); 
  // });
  // it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
  //   assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  // });
});



// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);