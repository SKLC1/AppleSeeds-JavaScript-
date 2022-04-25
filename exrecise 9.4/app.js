

const logStep =(N)=> {
  let hash = '#';
   for(let i =0; i < N ; i++) {
     console.log(`${hash.repeat(i+1)}${' '.repeat(N-i-1)}`);
   }
} 
console.log(logStep(6))



