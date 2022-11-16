/**
 * This function should take in a source array and a itemsToRemove array. 
 * It should return a new array with only those elements from source that 
 * are not present in the itemsToRemove array.
 */

const assertArraysEqual = require("./assertArraysEqual");

const without = function(soureArray, itemsToRemoveArray){
  let result = [];
  for (let s of soureArray){
    let isIncluded = true;
    for (let i of itemsToRemoveArray){
      if (s === i || typeof s !== 'string' && isNaN(s) && isNaN(i)) {
        isIncluded = false;
      }
    }
    if (isIncluded){
      result.push(s);
    }
  }
  console.log(result);
};

// Test code
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
