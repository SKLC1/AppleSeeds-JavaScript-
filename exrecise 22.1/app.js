const form = document.querySelector('.form')
const nameInp = document.querySelector('.input1');
const emailInp = document.querySelector('.input2');
const ageInp = document.querySelector('.input3');
const btn = document.querySelector('.btn');

const storeData = {}
for (let input of [nameInp,emailInp,ageInp]) {
  input.addEventListener('input', (e)=> {
    storeData[e.target.name] = e.target.value;
  });
}

let isWindow = false
const handleSubmit =()=> {
  if (!isWindow) { 
    isWindow = true
    const window = document.createElement('div')
    window.innerHTML = `
    <div class="box">
    <h1>Is this correct?</h1>
    ${Object.entries(storeData)}
    <button class='btn2' type="button">Confirm</button>
    <button class='btn3' type="button">Cancel</button>
    </div>`
    form.appendChild(window);

    const confirm = document.querySelector('.btn2')
    const cancel = document.querySelector('.btn3')
    confirm.addEventListener('click', handleConfirm)
    cancel.addEventListener('click', handleCancel)
  }
}
btn.addEventListener('click',handleSubmit)

const handleCancel =()=> {
  const popUp = document.querySelector('.box')
  popUp.remove()
  isWindow = false
}
let isConfirmed = false
const handleConfirm =()=> {
  if(!isConfirmed){
    isConfirmed = true
    const msg = document.createElement('div')
    msg.innerText = 'Successfully sent!'
    form.appendChild(msg);
  }
}