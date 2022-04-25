// function funcA() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//       return 2;
//   }
// }
// funcA();
//* answer
//!pre activate
// store funcA
// store a = undefined
// store function foo
//! run code
//? log a prints >> undefined
//? log foo() >> activate function >> return 2


// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());
//*answer
//! pre activate
// store fullname
// /store obj 
// store getfullname func
// store test
// ! run 
//? log func inside obj >> returns full name value
//? log test >> 



// function funcB() {
//   let a = b = 0;
//   a++;
//   return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);
// *answer
// !pre run
// store funcb
// !run
// cannot access a >> undefined
// cannot access b >> number 
//! wrong about b [reason?] because 

// function funcC() {
//   console.log("1");
// }
// funcC();
// function funcC() {
//   console.log("2");
// }
// funcC()
// *answer
// !pre run 
//store funcC 
//store funcC
// !run
// activate funcC >> prints 1
// activate funcC >> prints 2 
//! wrong about 1 [reason?] because it was redefined in pre run

// function funcD1() {
//   d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//   var e = 1;
// }
// funcD2();
// console.log(e);
//* answer
// !run
// log d > not in D1 scope >> 1
// log e > not in D2 scope >> undefined [error]

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
//* answer
// !pre run
//store funcE 
// store car f = undefined
// !run
// ? log funcE inside global scope >> print >> udefined
// ? log funcE inside func scope >> print >> 1 [because var is in global scope]






