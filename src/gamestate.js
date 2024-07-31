const numOfFld = 4;
let komb = [];
let filled = [];
let row;

const resetState = function(){
    komb = [];
    filled = new Array(numOfFld).fill(false);
    row = 0;
}

const nextRow = function(){
    row++;
    filled.fill(false);
}

export default {
                numOfFld,
                get filled() {return filled;},
                get komb() {return komb},
                get row() {return row},
                resetState, 
                nextRow
            };

