const assert = require('chai').assert;
const tail = require('../tail');
// const assertEqual = require('../assertEqual');
// const assertArraysEqual = require('../assertArraysEqual');

// Test code based on Mocha and Chai
// assert.deepEqual work for comparing objects and arrays
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns ['5', '6'] for ['4', '5', '6']", () => {
    assert.deepEqual(tail(['4', '5', '6']), ['5', '6']);
  });
  it("return [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
});

//Test code
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(result);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail! becase object !== array
// assertArraysEqual(result, ["Lighthouse", "Labs"]); // => should be true
