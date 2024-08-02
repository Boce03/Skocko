import gameState from './gamestate';
import action from './actions';
import event from './event';

console.log("uspesno ucitano");

gameState.resetState();
console.log(gameState);

event.addEvent(function(){
    return document.querySelectorAll('div.right-bottom-container .btn');
}, action.add, 'click');

event.addEvent(function(){
    return document.querySelectorAll('div.left-container div.fld-hover');
}, action.remove, 'click');

event.addEvent(function(){
    return document.querySelectorAll('div.left-row .btn');
}, action.submit, 'click');