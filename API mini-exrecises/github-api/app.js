
const input = document.querySelector('.input')
const btn = document.querySelector('.getUser')


btn.addEventListener('click', getUser)

async function getUser() {
  const urlAll =  "https://api.github.com/users/";
  const user = input.value
  const personUrl = urlAll.concat(user)
  fetch(personUrl)
}
getUser('SKL1')