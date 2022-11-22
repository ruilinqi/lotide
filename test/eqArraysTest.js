// ?? The eqArraysTest.js file should require the assertEqual function instead of it being copied in there
const eqArrays = require('../eqArrays');

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); //should be true
console.log(eqArrays([1, 2, 3], [2, 3, 4])); //should be false

console.log(eqArrays("Lighthouse Labs", "Bootcamp")); // should be false
console.log(eqArrays(1, 1)); // should be true