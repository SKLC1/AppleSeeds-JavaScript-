
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const smileyCont = document.querySelector('.smiley-cont') 
const getSmileys =(e)=> {
  const count = input.value;
  
  for (let i = 0; i < count; i++) {
    const smiley = document.createElement('div'); 
    smiley.classList.add('smiley')
    smileyCont.append(smiley)
  }
}

button.addEventListener('click', getSmileys);