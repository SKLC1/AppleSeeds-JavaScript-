
let people = ["Greg", "Mary", "Devon", "James"];

// 1

// const logNames =()=>{
//   for(i=0 ; i < people.length ; i++) {
//     console.log(people[i]);
//   }
// }
// logNames(people);
// 2
let peopleA = people.pop();
console.log(people);
// 3
let peopleB = people.shift();
console.log(people);
// 4
let peopleC = people.unshift('Matt');
console.log(people);
// 5
let peopleD = people.push('Segev');
console.log(people);
// 6
const logMary =()=> {
  for(i=0; i<people.length;i++){
    if( people[i] == 'Mary') {
      console.log('mary')
    }
  }
}
logMary(people);
// 7
console.log(people.slice(2));
// 8
console.log(people.indexOf('Mary'));
// 9
console.log(people.indexOf('foo'));
// 10
people.splice(2,1,'Elizabeth' ,'Artie')
console.log(people);
// 11
let withBob = people.push('Bob');

for (let i = 0; i < people.length; i++) {
  console.log(wi[i]);
}