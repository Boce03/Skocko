import gameState from './gamestate';
import action from './actions';

console.log("uspesno ucitano");


/*
    refactoring addEvent and removeEvent, first idea just one funciton and new module for initialise;
    this is just for testing add and remove functionality
*/
const addEvent = function(foo){
    let btnSymbols = document.querySelectorAll('div.right-bottom-container .btn');
    for(let btn of btnSymbols){
        btn.addEventListener('click', foo);
    }
}

const removeEvent = function(foo){
    let btnSymbols = document.querySelectorAll('div.left-container div.fld-hover');
    for(let btn of btnSymbols){
        btn.addEventListener('click', foo);
    }
}

gameState.resetState();
console.log(gameState);
addEvent(action.add);
removeEvent(action.remove);