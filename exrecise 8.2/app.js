
const myCountry = {
  country: 'israel',
  capital: 'jerusalem',
  language: 'hebrew',
  population: 7,
  neighbors: 4,
  describe() {
      console.log(`${this.country} has ${this.population} million people, their mother tongue is${this.language}, they 
      have ${this.neighbors} neighbouring countries and a capital called ${this.capital}`);
  },
  islandCeck() {
    if (this.neighbors === 0) {
      console.log(`Is island`) 
    } else {
      console.log(`not island`) 
    }
      
    }

  }

myCountry.describe()
myCountry.islandCeck()