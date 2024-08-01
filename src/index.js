import gameState from './gamestate';
import action from './actions';

console.log("uspesno ucitano");


/*
    refactoring addEvent and removeEvent, first idea just one funciton and new module for initialise;
    this is just for testing add and remove functionality
*/
const addEvent = function(getElements, foo){
    let btnSymbols = getElements();
    for(let btn of btnSymbols){
        btn.addEventListener('click', foo);
    }
}

/*document.querySelectorAll('div.right-bottom-container .btn');
const removeEvent = function(foo){
    let btnSymbols = document.querySelectorAll('div.left-container div.fld-hover');
    for(let btn of btnSymbols){
        btn.addEventListener('click', foo);
    }
}*/

gameState.resetState();
console.log(gameState);

addEvent(function(){
    return document.querySelectorAll('div.right-bottom-container .btn');
}, action.add);

addEvent(function(){
    return document.querySelectorAll('div.left-container div.fld-hover');
}, action.remove);

addEvent(function(){
    return document.querySelectorAll('div.left-row .btn');
}, action.submit);