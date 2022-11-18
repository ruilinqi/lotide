const findKey = function(object, callback){
  for (var key in object){
    if (callback(object[key])){ // when object[key] is "noma"
      return key;
    }
  }
}

let obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

console.log(findKey(obj, x => x.stars === 2));