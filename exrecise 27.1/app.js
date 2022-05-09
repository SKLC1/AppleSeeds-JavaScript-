// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

function promiseFunc(num) {
  const myPromise = new Promise((resolve,reject)=>{
    if (num > 10) {
      resolve('it is resolved')
    } else {
      reject('rejected')
    }
  })
  myPromise
    .then((num)=>{console.log(`${num} is bigger then 10`);})
    .catch((num)=>{console.log(`${num} is smaller then 10`);})
}
promiseFunc(11)
promiseFunc(10)
promiseFunc(8)