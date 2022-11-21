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

