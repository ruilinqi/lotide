const assert = require('chai').assert;
const head = require('../head');
// const assertEqual = require('../assertEqual');

// Mocha and Chai based test code
// assert.strictEqual simply uses === to compare values
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("return '5' for [5,6,7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
});

// OLD TEST CODE based on assertEqual and head function
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");