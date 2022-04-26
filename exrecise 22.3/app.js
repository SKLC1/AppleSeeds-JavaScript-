const container = document.querySelector('.container')
const box = document.querySelector('.letter-box');
const msg = document.querySelector('.msg')
const getRandom = Math.floor(Math.random() * (122-97) + 97);
const correct =String.fromCharCode(getRandom)
console.log(correct);


let wrongsCont = document.createElement('div');
wrongsCont.setAttribute('class', 'wrongs');
container.append(wrongsCont);


let mistakes = [];
let again = false
const handleKeypress =(e)=> {
  for (let i = 0; i < mistakes.length; i++) {
    if(e.key === mistakes[i]){
      return msg.innerText = `${e.key} has been tried`
    }
  }
  if(e.key.match(/^[a-zA-Z]+$/) && e.key !== 'Enter'){

    if(e.key !== correct){
      msg.innerText = 'Nope, Wrong letter'
      msg.style.color = 'red'
      let wrongs = document.createElement('div')
      wrongs.innerText = e.key + ','
      wrongsCont.append(wrongs)
      mistakes.push(e.key)
    }
    if (e.key === correct) {
      msg.innerText = 'Right letter'
    msg.style.color = 'green'
    box.innerText = correct
    if(again == false) {
      again = true
      let playAgain = document.createElement('div')
      playAgain.innerText = 'PLay again?'
      container.append(playAgain)
      let btn = document.createElement('button')
      btn.innerText = 'Yes'
      container.append(btn)
      btn.addEventListener('click',()=>{
        wrongsCont.remove()
        playAgain.remove()
        btn.remove()
        msg.innerText = ''
      })
      
    }
    
    }
  } else {
    msg.innerText = 'invalid letter'
  }
}

document.addEventListener('keypress',handleKeypress)
