
const table1 = document.querySelector('#player1-race')
const table2 = document.querySelector('#player2-race')
const player1 = document.querySelector('.active')
const player2 = document.querySelector('.active')
const spots = document.querySelectorAll('#player1-race td')
const arr = [...spots]
const spots2 = document.querySelectorAll('#player2-race td')
const arr2 = [...spots2]
const finish = document.querySelectorAll('.finish')

let i = 0;
const movePlayer1 = (e) => {
  if (e.key === 'ArrowRight') {
    arr[i+1].setAttribute('class', 'active')
    i++
    arr[i-1].removeAttribute("class");
  }
  if(arr[arr.length-1].className === 'active') {
    console.log('1 wins');
    const winner = document.createElement('div')
    winner.innerText = 'player 1 wins'
    table1.append(winner)
  }
}
let j = 0;
const movePlayer2 = (e) => {
  if (e.key === 'd') {
    arr2[j+1].setAttribute('class', 'active')
    j++
    arr2[j-1].removeAttribute("class");
  }
  if(arr2[arr2.length-1].className === 'active') {
    console.log('2 wins');
    const winner = document.createElement('div')
    winner.innerText = 'player 2 wins'
    table1.append(winner)
  }
}

document.addEventListener('keydown',movePlayer1)
document.addEventListener('keydown',movePlayer2)