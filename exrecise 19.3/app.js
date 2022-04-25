

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.pass-list input');
const verify = document.querySelector('.verify');

function handleInput(e){
  const input = e.target;
  if(input.nextElementSibling && input.value) {
    input.nextElementSibling.focus()
  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData('text');
  console.log(paste);
  //loop over data and use it
  inputs.forEach((input,i)=> {input.value = paste[i]})
}

function backSpace(e) {
  const input = e.target;
  if(event.keyCode === 8) {
    input.previousElementSibling.focus()
    input.value = null  //? [not working]
  }
}
  
function autoSubmit(e) {
  if(typeof inputs[5] === 'number') {
    
  }
}

// listeners
form.addEventListener('input', handleInput);
inputs[0].addEventListener('paste', handlePaste);
form.addEventListener('keydown', backSpace);

