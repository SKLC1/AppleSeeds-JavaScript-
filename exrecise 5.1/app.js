
let country = 'israel';
let language = 'hebrew';
let population = 60;
let isIsland = false;

const countryToLiveIn =(country, language, population , isIsland)=> {
  if(language === 'english' && population < 50 && isIsland === false) {
    console.log('not');
    } else {
      console.log('yes');
    }
}
countryToLiveIn()