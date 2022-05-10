const btn = document.querySelector('.btn')
const searchbar = document.querySelector('.searchbar')

btn.addEventListener('click', ()=>{
   getMovieData(searchbar.value)
})

async function getMovieData(movieName) {
  const res = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=a4a2c31b`)
  const data = await res.json()
  try{
    const movieData = {
      poster: data.Poster,
      title: data.Title,
      genre: data.Genre,
      year: data.Year,
      plot: data.Plot,
      director: data.Director,
      actors: data.Actors,
      ratingsArr: data.Ratings,
    }
    console.log(movieData);
    (movieData.title!==undefined)?createCard(movieData):alert('not found');
    } catch {
    console.log('error n');
  }
}
const arr = []
function createCard(movieData) {
  const cardContainer = document.querySelector('.card-container')
  const card = document.createElement('div')
  card.classList.add('card')
  cardContainer.appendChild(card)
  createCardContent(movieData,card)
  arr.push(card)
  if (arr.length === 2) {
    arr[0].remove()
    arr.shift()
  }
}
function createCardContent(movieData,card) { 
  console.log(movieData);
  for (const key in movieData) {
    if (key == 'poster') {
      const stat = document.createElement('div')
      stat.classList.add('poster')
      stat.style.backgroundImage = `url('${movieData[key]}')`
      card.appendChild(stat)
    } else if (key == 'ratingsArr') {
      console.log(movieData[key]);
      movieData[key].forEach(e => {
        const stat = document.createElement('div')
        stat.innerText = `${e.Source}: ${e.Value}`
        card.appendChild(stat)
         });
    } else {
      const stat = document.createElement('div')
      stat.innerText = `${key}: ${movieData[key]}`
      card.appendChild(stat)
    }
    
  }
}

