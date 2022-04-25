const book1 = {
  name: 'no heart',
  author: '21 savage',
  year: 1999,
  translate: {},
  publisher:{},
}
const book2 = {
  name: 'views',
  author: 'drake',
  year: 2002,
  translate: {},
  publisher:{},
}

const bookUtils = {
  smaller(book1,book2) {
    if(book1['year'] < book2['year']){
      return `${book1['name']} is smaller`
    } else{
      return `${book2['name']} is smaller`
    }
  },
  setNewEdition(Object, newEdition) {
     return Object['year'] =  newEdition;
  },
  setLanguage(Object,language) {
    return Object.language = language;
  },
  setTranslator(Object,language,translator) {
   
    Object.translate['lang'] = language;
    Object.translate['tran'] = translator;
  },
  setPublisher(publisher,Object,name,location){

     Object.publisher['name'] = name;
     Object.publisher['location'] = location;
     return Object.publisher
  },

}
console.log(bookUtils.smaller(book1,book2))
console.log(bookUtils.setNewEdition(book1,2010))
console.log(bookUtils.setLanguage(book1,'Arabic','English'))
console.log(bookUtils.setTranslator(book1,'Arabic','English'))
console.log(book1)
console.log(bookUtils.setPublisher('Alan watts',book1,'Arabic','Tehran'))
console.log(bookUtils.isSamePublisher(book1,book2))
