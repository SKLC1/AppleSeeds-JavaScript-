
// max

// const findMax = arr.reduce((max,curr)=>{
  //   if(max < curr) {
    //     return curr
    //   }
    //   return max
    // } )
    // console.log(findMax);
    
    // sum
    const arr = [10,1,2,4,17,5,6];
const sum = arr.reduce((total, curr)=>{
  if(total % 2 === 1) {
    return curr
  }
  if(curr % 2 === 0) {
    return total + curr
  }
  return total
},0)
console.log(sum);

// average

// const findAverage = arr.reduce((max, curr)=> {
//   if(arr.indexOf(curr) !== arr.length-1){
//     return (max + curr)
//   } else{
//     return (max + curr) / 6
//   }
// })

// console.log(findAverage);//expecting 7.33333