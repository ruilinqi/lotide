const assertArraysEqual = require('./assertArraysEqual');
/**
 * a new function letterPositions which will return all the indices (zero-based
 * positions) in the string where each character is found.
 *
 * For each letter, instead of returning just one number to represent its number of
 * occurrences, multiple numbers may be needed to represent all the places in the
 * string that it shows up.
 */
const letterPositions = function(sentence) {
  let result = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) { //check if the result of sentence[i] wrote something inside?
      result[sentence[i]].push(i); //if not empty => push the index to result at sentence[index]
    } else {
      result[sentence[i]] = [i];// if empty, the result at sentence[i] is the index
    }
  }
  return result;
};

//assertArraysEqual(letterPositions("hello"), [1]);
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);

