// returns an object containing counts of every letter in an input string
// jshint esversion : 6

const countLetters = function(str) {
  let output = {};
  for (let character of str.split(' ').join('')) {
    if (output[character]){ //check if output at character(ex: i) has anything //if the computer wrote anything inside
      output[character]++; //if true => output at this character + 1
    }else{
      output[character] = 1;//if not => output of the character is 1
    }
  }

  return output;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;