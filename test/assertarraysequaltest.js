const assertArraysEqual = require('../assertArraysEqual')



assertArraysEqual([1, 2, 3], [1, 2, 3, 8, 0]); // fail
assertArraysEqual([1, 2, 3], [1, 2, 3]);       // pass
assertArraysEqual(["h", "e", "l", "l"], ["h", "e", "l", "l"]); //pass
assertArraysEqual(["h", "e", "l", "l"], ["h", "e", "l", "o"]);  //fail
assertArraysEqual([[], 2, 3], [[], 2, 3]);  
assertArraysEqual([1, 2, 3], [1, 2, 3]);