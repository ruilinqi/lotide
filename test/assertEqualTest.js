const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // eqArray => true, should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)// eqArray => false, should PASS

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // eqArray=> true, should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // eqArray => false, assertEqual should PASS