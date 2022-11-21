// ACTUAL FUNCTION
const middle = function(array) {
  let result = [];
  if (array.length > 2){
    if (array.length % 2 === 1){
      return array.slice((array.length - 1) / 2, (array.length - 1) / 2 + 1);
    }
    if (array.length % 2 === 0){
      return array.slice(array.length / 2 - 1, array.length / 2 + 1);
      //result = [(array.length / 2 - 1), (array.length /2)];
    }
  }
  return [];
}
// TEST CODE
//For arrays with one or two elements, there is no middle. Return an empty array
middle([1]) // => []
middle([1, 2]) // => []

console.log(middle([1]));
console.log(middle([1, 2]));
//For arrays with odd number of elements, an array containing a single middle element should be returned
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

console.log(middle([1, 2, 3]));
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
