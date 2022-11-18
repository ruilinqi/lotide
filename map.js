const eqArrays = require("./eqArrays")

const assertArraysEqual = function(actual, expected){
  if (eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const words = ["ground", "control", "to", "major", "tom"];

// map function 
const map = function(array, callback) {
  const results = [];
  for (let item of array){
    // console.log('item before: ', item);
    // console.log('item after: ', callback(item));
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);// the first character of each item
console.log(results1);

//Test code - use assertArraysEqual to check if the actual output array and excepted array same
var expectedArray = [ 'g', 'c', 't', 'm', 't' ];
console.log(assertArraysEqual(results1, expectedArray));
