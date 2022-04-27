const storm = {superPower: 'Flying'} 

function printSuperPower() {
  console.log("my superpower is " + this.superPower); 
}

storm.func = printSuperPower;
console.log(storm.func());

