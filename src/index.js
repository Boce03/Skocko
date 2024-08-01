import gameState from './gamestate';
import action from './actions';

console.log("uspesno ucitano");

const addEvent = function(getElements, foo){
    let btnSymbols = getElements();
    for(let btn of btnSymbols){
        btn.addEventListener('click', foo);
    }
}

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