// TEST/ASSERTION FUNCTIONS
const assert = require('chai').assert;
const middle = require('../middle');
// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it("return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("return ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });
});

// Test Code based on assertArraysEqual
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);

// TEST CODE
// console.log(middle([1]));
// console.log(middle([1, 2]));

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]


// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]