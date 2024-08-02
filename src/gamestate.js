import logic from './logic';
import timer from './timer';

const numOfFld = 4;
const numOfSym = 6;
const gameDuration = 60; //in seconds
let komb = [];
let filled = [];
let row;

const resetState = function(){
    komb = [];
    filled = new Array(numOfFld).fill(false);
    row = 0;
    logic.generate();

    let timerDiv = document.querySelector('.timer-inner');
    timerDiv.style.height = '0';

    timer.init(gameDuration, timerDiv);
    timer.start();
}

const nextRow = function(){
    row++;
    filled.fill(false);
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

