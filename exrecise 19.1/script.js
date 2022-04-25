const holder = document.querySelector('.start-here')

holder.innerText = 'main title';
// add sub 4
const uls = document.querySelectorAll('ul')
const sub4 = uls[1]

const li4 = document.createElement('li');
li4.innerText = 'sub title 4';

sub4.appendChild(li4)
// remove last li
const liList = document.querySelectorAll('li');
const removeMe = liList[liList.length-1]

removeMe.remove()
// change title
document.title = 'Master of Dom'

// change text of p 
const p = document.querySelector('p');
p.innerText=('Master');