


let arr = ["boo", "doooo", "hoo","ro"] ;

const arrNum =()=> {
  let itemLength = 0 ;
  let myArr = [];
  for(i = 0; i < arr.length; i++) {
    itemLength = arr[i].length;
    myArr.push(itemLength);
  }
  return myArr;
}
console.log(arrNum(arr));