const container = document.querySelector('.container')
const input = document.querySelector('.text');
const submit = document.querySelector('.btn')
const res = document.createElement('div')

const handleSubmit = () => {
  if (input.value < 100) {
    container.append(res)
    res.innerText = 'We said 100 or more';
    res.style.color = 'red'; 
  } else if( input.value > 100) {
    container.submit
  }
}

submit.addEventListener('click', handleSubmit)