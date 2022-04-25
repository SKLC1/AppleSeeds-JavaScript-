// 1
const filled = new Array(100).fill({ pizza: '🍕' });

// console.log(filled);
// 2
console.log(Array.from({length: 100}, (v, i) => i));
// 3
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const propertyValues = Object.values(person);

console.log(propertyValues);

// 4
const objectArray = ['a','b','c'];

Object.assign({}, ['a','b','c']); 

console.log(objectArray);
// 5
let v3 = [1, 2, 3, 4, 5];

console.log(   Array.isArray(v3));
// 6
let v4 = [1, 2, 3, 4, 5];
let v5 = [...v4];
console.log(v5);