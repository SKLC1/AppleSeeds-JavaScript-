//? Question 1:
// In your own words what will this point to and why?(Note 
// this is the global scope)
// * answer:
// * this will log the Window object because "this"'s utility is to point to the functions
// * object which in this case is the global object (window)
console.log(this);
// ?Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// *answer a: this will >usually< point to "Timmy" because it goes out side its function to the parent object
// *  which is "myObj" and there it gains access to name: value.
// * however in this case this is inside an arrow function which ignores this's ability.
// *answer b:
// * a possibilty to fix this code would be:
// fixed
const myObjFixed = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

// original
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};

// ?myObj.greet();
// Question 3:
// In your own words what will this point to and why?
// *answer: this will point to the global scope because it goes outside of the function 
// *to the the object its inside of. which in case is the window(global scope)
const myFuncDec = function () {
  console.log(this);
};
//? Question 4:
// In your own words what will this point to and why?
// *answer: in this case the arrow function will not let this get to the
// * window object and it will be undefined
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
// ?Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// *answer a: this will be undefined the arrow function will not let this get to the
// * global window.
// *answer b: a way to fix this would be to turn the arrow function to a regular
// * function. lik so:
// fixed
document.querySelector(".element").addEventListener(function() {
  console.log(this);
});

// original
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});