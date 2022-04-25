const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const example = document.querySelector('.example')



const handlePlus=()=>{
  if((parseInt(getComputedStyle(example).fontSize) < 100)) {
    const add = `${parseInt(getComputedStyle(example).fontSize)+5}px` 
    example.style.fontSize = add
  }
}
const handleMinus=()=>{
  if((parseInt(getComputedStyle(example).fontSize) > 6)) {
   const less = `${parseInt(getComputedStyle(example).fontSize)-5}px` 
  example.style.fontSize = less
  }
}


plus.addEventListener('click', handlePlus)
minus.addEventListener('click', handleMinus)