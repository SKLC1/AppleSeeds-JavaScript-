

function Square (a, b, c, d){
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
const shape = new Square(2,2,2,2)

Square.prototype.isSquare = function (shape) {
    if(shape.a === shape.b === shape.c === shape.d){
      console.log('it is a square');
    } else {
      console.log('no');
    }
  } 
Square.isSquare(shape)