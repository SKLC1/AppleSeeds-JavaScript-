
let password = '132313248';
// 1
const passwordCheck = ()=>{
  if (password.length > 7) {
    return 'strong'
  }
  else{
    return 'weak'
  }
}
console.log(passwordCheck())
// 2
password.length > 7 ? console.log('strong') : console.log('weak') 
// 3
 let passcheck = password.length > 7 && 'strong' || 'weak';
 console.log(passcheck);