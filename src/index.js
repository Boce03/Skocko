import gameState from './gamestate';
import action from './actions';

console.log("uspesno ucitano");

const addEvent = function(getElements, foo, event){
    let btnSymbols = getElements();
    for(let btn of btnSymbols){
        btn.addEventListener(event, foo);
    }
}

gameState.resetState();
console.log(gameState);

addEvent(function(){
    return document.querySelectorAll('div.right-bottom-container .btn');
}, action.add, 'click');

addEvent(function(){
    return document.querySelectorAll('div.left-container div.fld-hover');
}, action.remove, 'click');

addEvent(function(){
    return document.querySelectorAll('div.left-row .btn');
}, action.submit, 'click');