const tail = require('../tail');
const assertEqual = require('../assertEqual');

//Test code
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail! //???? why

