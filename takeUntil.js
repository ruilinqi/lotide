const eqArrays = require("./eqArrays")

const assertArraysEqual = function(actual, expected){
  if (eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}
module.exports = assertArraysEqual;

// New takeUntil function
const takeUntil = function(array, callback) {
  let result = [];
  for (var i = 0; i < array.length && callback(array[i]) === false; i++){
      result.push(array[i]);
  }
  return result;
}

// Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));