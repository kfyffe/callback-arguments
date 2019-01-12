var words = ["ground", "control", "to", "major", "tom"];

//map function with two arguments, array and callback
function map (array, cb){
  var newArray = [];
  for (word of array){
    newArray.push(cb(word));
  }
  console.log(newArray);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});