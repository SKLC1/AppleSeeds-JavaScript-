// 1
let objArr = [{name: 'Gideon'},{name: 'Simon'},{name: 'John'}]

const extractOnlyValue =(key,arr)=> {
  let res = [];
  arr.reduce((max, curr) => {
    res.push(curr[key])
  },0)
  return res
}
console.log(extractOnlyValue('name', objArr));



// 2
let myStr = 'this is a good string';

const countOnlyVowels =(str)=> {
  let vowels = 'aeoui';
  let letterArr = str.split('');
  return letterArr.reduce((max,curr)=> {
    if(vowels.includes(curr)) {
      max[curr] ? max[curr]++ :(max[curr]=1);
    }
    return max;
  }, {});
}
console.log(countOnlyVowels(myStr));

// 3
let arr =[{name: 'Gideon'},{name: 'Simon'},{name: 'John'}];

const addKeyAndValue = (arrOfObj, key, value) => {
  return arrOfObj.reduce((acc,curr,index) => {
    acc[index][key]=value; 
    return arrOfObj
  }, arrOfObj);
}

console.log(addKeyAndValue(arr,'role','student'));
