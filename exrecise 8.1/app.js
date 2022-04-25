const book = {
  name : 'Sherlock Holmes',
  writtenBy: 'Author',
  year: 1995,
  pages: 360,
  rating: 9.5,
};

const getBook =()=>{
  console.log(`The book ${book.name} was written by ${book.writtenBy} in the year ${book.year}`)
}

console.log(getBook(book));