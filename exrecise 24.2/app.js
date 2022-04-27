
const attack = function(attackNumber){
  console.log(this.attackList[attackNumber]);
}

function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

// pokemons
const charmander = new Pokemon('Charmander', 'Fire', ['Scratch','Dragon Breath','Fire Spin']) ;
const squirtle = new Pokemon('Squirtle', 'Water', ['Tail Whip','Rapid Spin','Water Pulse'])

Pokemon.prototype.callPokemon = function() {console.log(`${this.name} i choose you`)};
Pokemon.prototype.attack = function(num) {console.log(this.attackList[num]);}
charmander.callPokemon();
charmander.attack(2);





