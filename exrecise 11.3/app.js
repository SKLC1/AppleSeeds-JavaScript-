const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];


const getNames = () =>{
  let names = [];
  
  const retrieveName = data.forEach(function(person) {
    names.push(person.name)
  })
  return names
}
console.log(getNames(data));

const getOld = () =>{
  let older = [];
  
  const old = data.forEach(function(person) {
    birth = person['birthday'].slice(-4)
    if(birth > 1990) {
      older.push(person.name)
    }
  })
  return older
}
console.log(getOld(data));

// 3

const getFoodData =(data)=> {
  let meatsArr = [];
  let fishArr = [];

   data.forEach(function(person) {
     meatsArr.push(person.favoriteFoods['meats'])
  })
   data.forEach(function(person) {
     fishArr.push(person.favoriteFoods['fish'])
  })
  let joinedArr = meatsArr.concat(fishArr).toString(); 
  let final = joinedArr.split(',');
  let counter = {};
  // console.log(final);
  final.forEach(function(food) {
      if(counter[food]){
        counter[food] += 1;
      } else {
        counter[food] = 1;
      }
  })
  return counter
} 
console.log(getFoodData(data));