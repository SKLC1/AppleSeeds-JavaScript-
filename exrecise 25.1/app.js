//? 1. What is wrong with the code? explain in your own words
//? 2. Fix the code so that invoking the whoIsStronger function
//? will print "I am stronger".
//? note: you cannot change the 'hero' or the whoIsStronger
//? function.
// const hero = {
//  health: 5,
//  power: 68,
//  getStrength: function(){
//  if (this.health <= 5){
//  return this.power - 10;
//  } else return this.power;
//  }
// }
// function whoIsStronger(getStrength){
//  const myStrength = 82;
//  if (getStrength() < myStrength){
//  return "I am stronger";
//  } else return "You are stronger";
// }
// whoIsStronger(hero.getStrength);

//* answer 
//?  hero.getStreanth funciton's "this" is called by the window which makes the this undefined
//? we can fix taht by using bind() and changing the this.
//? example:
const hero = {
  health: 5,
  power: 68,
  getStrength: function(){
  if (this.health <= 5){
  return this.power - 10;
  } else return this.power;
  }
 }
//  
console.log(hero.getStrength());
hero.getStrength.call(hero)
//  
function whoIsStronger(getStrength){
  const myStrength = 82;
  if (getStrength() < myStrength){
  return "I am stronger";
  } else return "You are stronger";
 }
 console.log(whoIsStronger(hero.getStrength.bind(hero))); 