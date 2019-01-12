var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
//.map creates new array 'result' using callback to Math.sqrt of input object
var result = input.map(function(obj) {
 return (Math.sqrt((obj.x * obj.x) + (obj.y * obj.y)));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);