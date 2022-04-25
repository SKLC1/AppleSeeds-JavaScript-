
const isLeap =(year)=> {
  if ((year % 4 == 0 || year % 400 == 0) && year % 100 !== 0){
    return 'yes'
  } 
  else {
    return 'no'
  }
      
}
  

console.log(isLeap(2100));