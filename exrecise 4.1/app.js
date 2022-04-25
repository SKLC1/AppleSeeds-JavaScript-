
let numSiblings = prompt('How many siblings do you have?');

const howMany = () => {
  if (parseFloat(numSiblings) === 1 ){
    console.log('1 sibling!');
  }
  else if(numSiblings >= 1) {
    console.log('More than 1 sibling');
  }
  else {
    console.log('No siblings')
  }
}
console.log(howMany());