let arr = [1,2,3,4,5,6,7,8,9,8,7,6];

const doubleValues = arr.map(function(num){
  return(num * 2)
})
console.log(doubleValues)

const onlyEvenValues = arr.map(function(num){
  if(num % 2 === 0) {
    return num;
  }
})
console.log(onlyEvenValues)

let arr2 = ['tes',2,3,4,'no',6,7,8,9,8,7,'de'];
const showArr = [];
const showFirstAndLast = arr2.forEach(function(num2, idx){
  
  if(typeof num2 === 'string' && idx === 0 || idx === arr2.length-1) {
    showArr.push(num2);
  }
})
console.log(showArr)

let str = 'this is a very good sentence, and here is a u';
let counter = {a:0, o:0, u:0,};

const vowelCount = (str)=>{
  splitted = str.split('');
  let counting = splitted.map(function(letter){
    if (letter === 'a') {
    return counter['a'] = counter['a'] + 1;
    }
    if (letter === 'o') {
    return counter['o'] = counter['o'] + 1;
    }
    if (letter === 'u') {
    return counter['u'] = counter['u'] + 1;
    }
  }) 
}
console.log(vowelCount(str))
console.log

const capitalize = (str)=>{
  return str.toUpperCase();
}
console.log(capitalize(str));

const shiftLetters =(str)=> {
  let shiftedArr = [];
  let splitted = str.split('');
  const shift = splitted.map(function(letter){
    if(('z' >= letter && letter >'a') || ('Z' >= letter && letter >='A')) {
      chared = (letter.charCodeAt()) +1;
      result = String.fromCharCode(chared);
      return result
    } else {
      return letter
    }
  });
  return shift.join('')
} 
console.log(shiftLetters(str))

const swapCase =(str)=> {
  splitted = str.split(' ');
  const cap = splitted.map(function(word, inx){
    if(inx % 2 === 0) {
      return word.toUpperCase();
    } else {
      return word
    }
  })
  console.log(cap.join(' '));
} 
console.log(swapCase(str))