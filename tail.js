/**
 *  Return the tail of an array.
 *  Tail: everything except for the first item (head) of the provided array.
 *  if empty array => return 'undefined'
 */
const tail = function(array) {
  return array.slice(1, array.length); //1, array.length-1
};

module.exports = tail;