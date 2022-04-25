
const arr = [1,7,3,0,-5,7,3,9];


for (i = 0; i < arr.length ; i++) {
  console.log(arr[i]);
}

const arrayLenght =()=> {
  let length = 0;
  for (i = 1; i < arr.length ; i++) {
    length++
  }
  return length
}
console.log(arrayLenght(arr));

const arraySum =()=> {
  let sum = 0;
  for (i = 0; i < arr.length ; i++) {
    sum = sum + arr[i];
  }
  return sum
}
console.log(arraySum(arr));

const arrMulti =()=> {
  let score = 0;
  for (i = 0; i < arr.length ; i++) {
    score = score * arr[i];
  }
  return score
}
console.log (arrMulti(arr));