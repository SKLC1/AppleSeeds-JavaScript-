const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

const logCountry =(arr)=> {
  let joinedArr = arr.toString().split(',');
  
  for(let i=0; i < joinedArr.length; i++) {
    console.log(`neighbor: ${joinedArr[i]}`)
  }
}
console.log(logCountry(listOfNeighbours));