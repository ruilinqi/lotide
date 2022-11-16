/**
 *  Return the tail of an array.
 *  Tail: everything except for the first item (head) of the provided array.
 *  if empty array => return 'undefined'
 */
 const tail = function(array) {
  return array.slice[0]; //1, array.length-1
}

//Test code
/**
 * const result = tail(["Hello", "Lighthouse", "Labs"]);
 * assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
 */
