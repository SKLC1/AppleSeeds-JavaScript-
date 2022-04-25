
let str = 'myWord';

const func =()=>{
   return `${str} is a string`;
}

const isString = (str, func) => {
  if (typeof str === 'string') {
    return func(str)
  }
}

console.log(isString(str, func));
// 3
let sentence = 'this is a good sentence';

const dashes =(arr)=>{
  let res = arr.join("-");
  return res;
}

const firstWordUpperCase =(sentence, dashes)=>{
    let sentenceSplit = sentence.split(" ");
    let upperFirst = sentenceSplit[0].toUpperCase();
    sentenceSplit.splice(0,1, upperFirst);
    return dashes(sentenceSplit)
}  
console.log(firstWordUpperCase(sentence, dashes));


// 4
let boo = true;

const funcCall =(arg)=>{
   (typeof arg === "boolean")?
   console.log(`is`):
   console.log(`is not`);
}

const myFunc = (arg, funcCall) => {
    return funcCall(arg)
}
console.log(myFunc(boo, funcCall))