const eqArrays = require('./eqArrays');

const assertEqual = function (actual, expected){
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}
/**
 * 
 * eqObjects Function will take in two objects and returns true or false, based on a perfect match.
 * @param {*} object1 
 * @param {*} object2 
 */
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  console.log(`object1's keys: ${Object.keys(object1)}, object2's keys: ${Object.keys(object2)}`);
  console.log(`length of object1's keys: ${Object.keys(object1).length}, length of object2's keys: ${Object.keys(object2).length}`);
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for (let key1 in object1){
    for (let key2 in object2){
      console.log(`key1: ${key1}, value1: ${object1[key1]}; key2: ${key2}, value2: ${object1[key2]};`);
      if (object1[key1] !== object2[key2]){
        console.log(object1[key1], object1[key2]);
        return false;
      }
    }
  }
    return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  //console.log(`Example label: ${inspect(actual)}`);

}

// Test Code

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

console.log(`eqObjects result: ${eqObjects(ab, ba)}`); 

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
