
let color = 'blue';

const colorFunc =(color)=>{

  switch(color) {
    case 'yellow': 
    case 'pink' :
    case 'orange': 
      return 'light';
    break;
    case 'blue':
    case 'purple':
    case 'brown':
      return 'dark';
    break;
    default: 'unknown';
    }
}
console.log(colorFunc('pink'));