

// block 1
// var b = 1;
// function someFunction(number) {
//     function otherFunction(input) {
//         return b;
//     }
//     b = 5;
//     return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

//* answer
// invoked somefunction(9)
// other function takes 9 as parameter
// function return 1 [closure]
// function set b=5 and return otherfuction (function description)
//! [why is result = 5 ?]

// block 2
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);

// *answer
// function b2 invoked
// log a
// b2 set a = 10
// return function called a
// logs a() { }
// ! wrong [why did b2 not change a?]


// block 3
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
//* answer
// i = 0
// inside loop block
// log is a function exxpression 
// logs i 3 time

// ! [what is the 1?]
// ! [why is i = 3?]


