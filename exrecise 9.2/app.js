let arr = ["boo", "doooo", "hoo","ro"] ;

  let itemLength = 0 ;
  let myArr = [];
  let i =0;

  while(i < arr.length) {
    itemLength = arr[i].length;
    myArr.push(itemLength);
    i++;
  }

console.log(myArr);