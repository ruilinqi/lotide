const eqArrays = require("./eqArrays");

/**
 * we will not be writing assertions (test code) for assertArraysEqual. That said,
 * you can and should call the function below its declaration and visually ensure
 * that the message printed to the console is accurate.
 */
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertArraysEqual;
