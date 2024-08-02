import logic from './logic';
import timer from './timer';
import event from './event';
import action from './actions';

const numOfFld = 4;
const numOfSym = 6;
const gameDuration = 60; //in seconds
let komb = [];
let filled = [];
let row;

let btnStartGame = document.getElementById('start');

const resetState = function(){
    komb = [];
    filled = new Array(numOfFld).fill(false);
    row = 0;
    logic.generate();
    
    
    let timerDiv = document.querySelector('.timer-inner');
    timerDiv.style.height = '0';
    timer.init(gameDuration, timerDiv);
    timer.start();

    
    event.addEvent(function(){
        return document.querySelectorAll('div.right-bottom-container .btn');
    }, action.add, 'click');

    event.addEvent(function(){
        return document.querySelectorAll('div#fld-0 div.fld-hover');
    }, action.remove, 'click');

    event.addEvent(function(){
        return document.querySelectorAll('div#fld-0 .btn');
    }, action.submit, 'click');

    event.removeEvent(function(){
        return document.querySelectorAll('#start');
    }, resetState, 'click');
}

const nextRow = function(){
    event.removeEvent(function(){
        return document.querySelectorAll(`div#fld-${row} div.fld-hover`);
    }, action.remove, 'click');

    event.removeEvent(function(){
        return document.querySelectorAll(`div#fld-${row} .btn`);
    }, action.submit, 'click');
    
    row++;
    filled.fill(false);

    event.addEvent(function(){
        return document.querySelectorAll(`div#fld-${row} div.fld-hover`);
    }, action.remove, 'click');

    event.addEvent(function(){
        return document.querySelectorAll(`div#fld-${row} .btn`);
    }, action.submit, 'click');
}

export default {
                numOfFld,
                numOfSym,
                gameDuration,
                get filled() {return filled;},
                get komb() {return komb},
                get row() {return row},
                resetState, 
                nextRow
            };

