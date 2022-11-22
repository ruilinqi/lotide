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
assertEqual("lighthouse", "lighthouse");
// => ✅✅✅ Assertion Passed: lighthouse === lighthouse
assertEqual("lighthouse", "Lighthouse");
// => ❌❌❌ Assertion Failed: lighthouse !== Lighthouse
```
* `assertEqual(actual, expected)`: Takes in two primitive values, and asserts whether they are equal.
* `assertObjectsEqual(actual, expected)`: Takes in two objects, and asserts whether they are equal.
