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

const resetRow = function(){
    let fields = document.querySelectorAll(`.fld-remove`);
    for(let fld of fields){
        fld.style.backgroundImage = 'none';
    }

    let fldRows = document.querySelectorAll('.flex-row[data-type="grid"] > .flex-row:first-of-type');
    for(let row of fldRows){
        row.classList.add('transparent');
    }

    let rezRows = document.querySelectorAll('.rez-row');
    for(let row of rezRows){
        row.style.visibility = 'hidden';
    }

    let rezBtn = document.querySelectorAll('.rez-btn');
    for(let btn of rezBtn){
        btn.style.visibility = 'hidden';
    }

    let ansFld = document.querySelectorAll('.flex-row[data-type="answer"] .fld');
    for(let fld of ansFld){
        fld.style.backgroundImage = 'none';
    }

    let rezFld = document.querySelectorAll('.rez-row .rez');
    for(let fld of rezFld){
        fld.style.backgroundColor = 'white';
    }
};

const resetState = function(){
    resetRow();

    komb = [];
    filled = new Array(numOfFld).fill(false);
    row = 0;
    logic.generate();
    
    timer.start(gameDuration * 1000);
    let btnStart = document.querySelector('.btn-start');
    btnStart.classList.add('hidden');

    event.addEvent(function(){
        return document.querySelectorAll('.btn-symbol');
    }, action.add, 'click');

    event.addEvent(function(){
        return document.querySelectorAll(`.flex-row[data-type="row-${row}"] .fld-remove`);
    }, action.remove, 'click');

    event.addEvent(function(){
        return document.querySelectorAll(`.flex-row[data-type="row-${row}"] .rez-btn`);
    }, action.submit, 'click')
}

const nextRow = function(){
    event.removeEvent(function(){
        return document.querySelectorAll(`.flex-row[data-type="row-${row}"] .fld-remove`);
    }, action.remove, 'click');

    event.removeEvent(function(){
        return document.querySelectorAll(`.flex-row[data-type="row-${row}"] .rez-btn`);
    }, action.submit, 'click')
    
    row++;
    filled.fill(false);

    event.addEvent(function(){
        return document.querySelectorAll(`.flex-row[data-type="row-${row}"] .fld-remove`);
    }, action.remove, 'click');

    event.addEvent(function(){
        return document.querySelectorAll(`.flex-row[data-type="row-${row}"] .rez-btn`);
    }, action.submit, 'click')
}

const gameOver = function(){
    timer.stop();
    logic.showAnswer();
    let btnStart = document.querySelector('.btn-start');
    btnStart.classList.remove('hidden');

    while(row < numOfSym) {
        event.removeEvent(function(){
            return document.querySelectorAll(`.flex-row[data-type="row-${row}"] .fld-remove`);
        }, action.remove, 'click');
    
        event.removeEvent(function(){
            return document.querySelectorAll(`.flex-row[data-type="row-${row}"] .rez-btn`);
        }, action.submit, 'click')

        row++;
    }
}

export default {
                numOfFld,
                numOfSym,
                gameDuration,
                get filled() {return filled;},
                get komb() {return komb;},
                get row() {return row;},
                resetState, 
                nextRow,
                gameOver
            };

