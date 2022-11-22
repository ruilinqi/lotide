// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length > 2) {
    //For arrays with odd number of elements, an array containing a single middle element should be returned
    if (array.length % 2 === 1) {
      return array.slice(array.length / 2, array.length / 2 + 1);
    }
    //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    if (array.length % 2 === 0) {
      return array.slice(array.length / 2 - 1, array.length / 2 + 1);
      //result = [(array.length / 2 - 1), (array.length /2)];
    }
  }
  //For arrays with one or two elements, there is no middle. Return an empty array
  return [];
};

module.exports = middle;

//Test Code
// console.log(middle([1]));
// console.log(middle([1, 2]));

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]


// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]