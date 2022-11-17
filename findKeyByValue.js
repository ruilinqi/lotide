
const assertEqual = function (actual, expected){
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

/**
 * scan the object and return the first key which contains the given value.
 * If no key with that given value is found, then it should return undefined.
 * 
 * @param {*} object 
 * @param {*} value 
 */
const findKeyByValue = function (object, value){
  for (let key in object){
    console.log(object[key]);
    if (value === object[key]){
      console.log("Find a match!");
    }
  }
}
// const findKeyByValue = function (object, value){
//   for (let key of object){
//     console.log(Object.keys(object));
//   }
// }

// Test Code
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);