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