import logic from './logic';

const numOfFld = 4;
const numOfSym = 6;
let komb = [];
let filled = [];
let row;

const resetState = function(){
    komb = [];
    filled = new Array(numOfFld).fill(false);
    row = 0;
    logic.generate();
}

const nextRow = function(){
    row++;
    filled.fill(false);
}

export default {
                numOfFld,
                numOfSym,
                get filled() {return filled;},
                get komb() {return komb},
                get row() {return row},
                resetState, 
                nextRow
            };

