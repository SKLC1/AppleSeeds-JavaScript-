// a
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.sort());
console.log(foods.sort().reverse());

// b
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

console.log(foods.toString().toLowerCase().split(',').sort());
console.log(foods.toString().toLowerCase().split(',').sort().reverse());
// c
const words = ["apple", "supercalifragilisticexpialidocious", 
"hi", "zoo"];

words.sort((a,b)=> {return a.length-b.length})
console.log(words);