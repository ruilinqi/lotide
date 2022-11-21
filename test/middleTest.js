// TEST/ASSERTION FUNCTIONS
const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);

console.log('---');
// TEST CODE
middle([1]) // => []
middle([1, 2]) // => []
console.log(middle([1]));
console.log(middle([1, 2]));

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
console.log(middle([1, 2, 3]));


middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));