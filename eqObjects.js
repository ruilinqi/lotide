const eqArrays = require('./eqArrays');
/**
 * eqObjects Function will take in two objects and returns true or false, based on a perfect match.
 * @param {*} object1
 * @param {*} object2
 */
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // console.log(`object1's keys: ${Object.keys(object1)}, object2's keys: ${Object.keys(object2)}`);
  // console.log(`length of object1's keys: ${Object.keys(object1).length}, length of object2's keys: ${Object.keys(object2).length}`);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
    //  console.log(object1[key], object2[key]);
    //  console.log(`key: ${key}, value1: ${object1[key]}; key: ${key}, value2: ${object2[key]};`);
  }
  return true;
};
module.exports = eqObjects;
// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
