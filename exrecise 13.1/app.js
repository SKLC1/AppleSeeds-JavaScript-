const numbers = [1, -5, 666.50, 2, 400, 11];

//? console.log(numbers.sort());// wiil sort by string(first number)

console.log(numbers.sort((a,b)=> a-b));

console.log(numbers.sort((a,b)=> b-a));