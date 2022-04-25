
const candyStore = {
  candies: [
      {
          name: "mint gum",
          id: "as12f",
          price: 2,
          amount: 2
      },
      {
          name: "twix",
          id: "5hd7y",
          price: 5,
          amount: 4
      },
  ],
  cashRegister: 200
}


function getCandy(candyStore, id){ 
    const result = candyStore.candies.forEach(candy => {
        if(candy.id === id) {
            let test = candy.name
            return test
        }
    });
    return result
}
console.log(getCandy(candyStore,"as12f"))