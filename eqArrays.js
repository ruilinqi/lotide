// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  //check if the lengths same. if not => return false
  if (actual.length !== expected.length){
    return false;
  }
  // Loop each item of two array, compare them
  for (var i = 0; i <= actual.length; i++){
    //if not same => return false
    if (actual[i] !== expected[i]){
      return false;
    }
  }
  // Otherwise, return true
  return true;

};

module.exports = eqArrays;

// test
console.log(eqArrays([1, 2, 3], [1, 2, 3])); //should be true
console.log(eqArrays([1, 2, 3], [2, 3, 4]));//should be false


// TEST CODE
console.log(eqArrays("Lighthouse Labs", "Bootcamp"));// should be false
console.log(eqArrays(1, 1));//should be true