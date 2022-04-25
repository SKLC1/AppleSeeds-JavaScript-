

const mikeAvgCalc = (a,b,c) =>{
  let mikeAvg = ((a + b + c) / 3);
  return mikeAvg;
}
console.log(mikeAvgCalc(30,50,10));

const johnAvgCalc = (d,e,f) =>{
  let johnAvg = ((d + e + f) / 3);
  return johnAvg;
}
console.log(johnAvgCalc(90,70,10));

const decideWinner= (mikeAvg, johnAvg) => {
  if ( mikeAvg > johnAvg) {
    return `Mike's team wins!`
  }
  else if(mikeAvg === johnAvg){
    return `Draw!`
  }
  else{
    return `John's team wins!`
  }
}
console.log(decideWinner(mikeAvgCalc, johnAvgCalc))
