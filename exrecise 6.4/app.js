
let populations = [123213,123123,123123,6456];

const populationPercentages =(populations)=>{
  let percentages = [];
  for(i=0 ; i < populations.length ; i++) {
    percentages.push(iterate(populations[i]));
  } return percentages
}
function iterate(population) {
  let res = (population / 7900) * 100;
  return res;
}

console.log(populationPercentages(populations));

