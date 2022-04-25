
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", 
"hamburgers"];

const countLetters = (arr) => {
  const obj={};
  let counter =0;
  let str = array.join("").replace(/\s/g, "").toLowerCase();

  for(let i=0; i< str.length; i++) { 
    obj[str[i]] === undefined ? 
    (obj[str[i]] = 1)
    :obj[str[i]]++;
  }
  return obj;
}
console.log(countLetters(array))
