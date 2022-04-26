import {update as updateSnake,draw as drawSnake ,SNAKE_SPEED, gameBoard} from './snake.js'
let lastRenderTime = 0;
import { update as updateFood, draw as drawFood} from './food.js'
import {getSnakeHead, snakeIntersection} from './snake.js'
import {outsideGrid} from './grid.js'

let gameOver = false;

const main =(currentTime)=> {
  if (gameOver) {
    return alert('you lose')
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
  
  console.log('render');
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

const update =() =>{
  updateSnake()
  updateFood()
}
const draw =() =>{
  gameBoard.innerHTML =''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkForDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

