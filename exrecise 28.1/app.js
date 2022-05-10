// Lets do an simple ajax call with fetch using this url “https://
// api.jokes.one/jod”. 
// Create a button that will fetch the joke of the day. Display 
// to the screen the jokes title and the joke itself.
const cont = document.querySelector('.container')
document.querySelector('#get').addEventListener
('click', getText)

function appendJoke(content) {
  let elem = document.createElement('div');
  elem.innerText = content;
  console.log(elem);
  cont.appendChild(elem)
}

function getText () {
  fetch('https://api.jokes.one/jod')
  .then((res)=> res.json())
  .then((data)=> {
    const title = data.contents.jokes[0].joke.title;
    const jokeText = data.contents.jokes[0].joke.text;
    appendJoke(title)
    appendJoke(jokeText)
  })
  .catch(()=>console.log('error'))
}

async function getText2() {
  fetch('https://api.jokes.one/jod')
}