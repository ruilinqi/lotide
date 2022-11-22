# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ruilinqi/lotide`

**Require it:**

`const _ = require('@ruilinqi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Takes in two arrays, and asserts whether two arrays are equal.
```javascript
assertArraysEqual([1, 2, 3], [1, 2, 3]);
// => ✅✅✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]
assertArraysEqual([1, 2, 3], [3, 2, 1]);
// => ❌❌❌ Assertion Failed: [1, 2, 3] !== [3, 2, 1]
```
* `assertEqual(actual, expected)`: Takes in two primitive values, and asserts whether they are equal.
```javascript
assertEqual("lighthouse", "lighthouse");
// => ✅✅✅ Assertion Passed: lighthouse === lighthouse
assertEqual("lighthouse", "Lighthouse");
// => ❌❌❌ Assertion Failed: lighthouse !== Lighthouse
```
* `assertObjectsEqual(actual, expected)`: Takes in two objects, and asserts whether they are equal.
```javascript
assertObjectsEqual({ a: '1', b: '2' }, { b: '2', a: '1' });
// => ✅✅✅ Assertion Passed: { a: '1', b: '2' } === { b: '2', a: '1' }
assertObjectsEqual({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' });
// => 🛑🛑🛑 Assertion Failed: { a: '1', b: '2' } !== { a: '1', b: '2', c: '3' }
```
* `countLetters(str)`: Returns an object containing counts of every letter in an input string.
```javascript
countLetters("lighthouse in the house");
// => { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
```
* `countOnly(allItems, itemsToCount)`: Returns a number to count the specific objects in the array.
```javascript
const allItems = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const itemsToCount = {'Salima':true, 'Joe': true};
countOnly(allItems, itemsToCount);
// => { Salima: 2, Joe: 1 }
```
* `eqArrays(actual, expected)`: Takes in two arrays, and asserts whether they are equal. It returns true or false.
```javascript
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [2, 3, 4]); // => false
```
* `eqObjects(actual, expected)`: Takes in two objects, and asserts whether they are equal. It returns true or false.
* `findkey(object, callback)`: Takes in an object and a callback function. It returns the first key for which the callback returns a truthy value.
* `findkeyByValue(object, value)`: Takes in an object and a value. It scans the object and return the first key which contains the given value. and asserts whether they are equal.
```javascript
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
findKeyByValue(bestTVShowsByGenre, "The Wire");
// => "drama"
```
* `head(array)`: Returns the first element of the array.
* `letterPositions(sentence)`: Returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: Takes in an array to map and a callback function, and returns a new array based on the callback function.
* `middle(array)`: Returns the element in the middle of the array.
* `tail(array)`: Returns the tail (all elements except for the first item (head)) of the provided array.
* `takeUntil(array)`: Returns the elements of an array that taken from the beginning until the callback function returns a truthy value.
```javascript
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
takeUntil(data2, x => x === ',');
// => [ "I've", 'been', 'to', 'Hollywood' ]
```
* `without(soureArray, itemsToRemoveArray)`: Takes in a source array and a itemsToRemove array. It returns a new array with only those elements from source that are not present in the itemsToRemove array.
```javascript
without([1, 2, 3], [1]);
// => [2, 3]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// => [ 'hello', 'world' ]
```
