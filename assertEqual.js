/**
 * Use assertEqual to write test cases for various scenarios.
 */
// requiring eqArrays function
const eqArrays = require('./eqArrays');

const assertEqual = function (actual, expected){
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

module.exports = assertEqual;

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // eqArray => true, should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)// eqArray => false, should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // eqArray=> true, should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // eqArray => false, assertEqual should PASS