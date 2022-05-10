
const input = document.querySelector('.input')
const btn = document.querySelector('.getUser')
const usersContainer = document.querySelector('.users-container')

btn.addEventListener('click', getUser)
async function getUser() {// change username to input.value
  const userInput = input.value
  try {
    const url =  `https://api.github.com/users/${userInput}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.message) {
      throw 'error'
    }
    const profilePic = data.avatar_url
    const name = data.login
    const reposNumber = data.public_repos
    appendUser(profilePic,name,reposNumber)
  } catch {
    console.log('error');
  }
}

const appendUser = (picUrl,name,repos) => {
  const userCard = document.createElement('div')
  userCard.classList.add('card')
  usersContainer.appendChild(userCard)
  createImage(picUrl,userCard)
  createName(name,userCard)
  createRepos(repos,userCard)
}
const createImage = (picUrl,userCard) => {
  const image = document.createElement('div')
  image.classList.add('image')
  image.style.backgroundImage = `url('${picUrl}')`
  userCard.appendChild(image)
}
const createName = (name,userCard) => {
  const username = document.createElement('div')
  username.innerText = `Name: ${name}`;
  userCard.appendChild(username)
}
const createRepos = (repos,userCard) => {
  const reposNum = document.createElement('div')
  reposNum.innerText = `Public Repos: ${repos}`;
  userCard.appendChild(reposNum)
}

