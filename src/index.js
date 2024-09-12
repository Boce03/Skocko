import gameState from './gamestate';

console.log("uspesno ucitano");

let btnStartGame = document.querySelector('.btn-start')
btnStartGame.addEventListener('click', gameState.resetState);
//console.log(gameState);