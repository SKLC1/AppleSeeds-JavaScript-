

const bulb = document.querySelector('#bulb');

const toggleLight =()=> {
  bulb.classList.toggle('off')
  bulb.classList.toggle('on')
}

bulb.addEventListener('click', toggleLight)