const assertEqual = require('./assertEqual');
/**
 * scan the object and return the first key which contains the given value.
 * If no key with that given value is found, then it should return undefined.
 * @param {*} object
 * @param {*} value
 */
const findKeyByValue = function(object, value) {
  for (let key in object) {
    console.log(object[key]);
    if (value === object[key]) {
      return key;
    }
  }
};

// Test Code
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);