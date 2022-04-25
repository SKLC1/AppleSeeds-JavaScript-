
const age = document.querySelector('.inp');
const container = document.querySelector('.container')
const res = document.createElement('div')
container.appendChild(res);

const isLegal = (e) => {
  const input = e.target;
  if (input.value >= 18) {
    res.innerText = 'you can drink!'
  } else if (input.value < 18) {
    res.innerText = 'you cant drink!'
  }
}


age.addEventListener('keyup', isLegal);