import gameState from './gamestate';
import logic from './logic';
import symbol from './symbol'

const add = function(e){
    let key = e.target.id;

    let index = gameState.filled.findIndex((a) => a === false);
    if(index == -1){
        return;
    }
    
    gameState.komb[index] = symbol.symbols.get(key);
    gameState.filled[index] = true;
    
    let fldIndex = gameState.row*gameState.numOfFld + index;
    let fld = document.getElementById(`${fldIndex}`);
    fld.style.backgroundImage = `url(${symbol.images[symbol.symbols.get(key)]})`;

    if(gameState.filled.findIndex((a) => a === false) === -1){
        let rezBtn = document.querySelector(`.flex-row[data-type="row-${gameState.row}"] .rez-btn`);
        rezBtn.style.visibility = 'visible';
    }
    
    console.log(gameState);
}

const remove = function(e){
    let fld = e.target;
    let index = Number.parseInt(fld.id) % gameState.numOfFld;
    gameState.filled[index] = false;
    fld.style.backgroundImage = 'none';

    if(gameState.filled.findIndex((a) => a === false) !== -1){
        let rezBtn = document.querySelector(`.flex-row[data-type="row-${gameState.row}"] .rez-btn`);
        rezBtn.style.visibility = 'hidden';
    }

    console.log(gameState);
}

const submit = function(e){
    e.target.style.visibility = 'hidden';

    if(logic.check()){
        gameState.gameOver();
    } else{
        gameState.nextRow();
        if(gameState.row === gameState.numOfSym){
            gameState.gameOver();
        }
    }

    console.log(gameState);
}

export default {
    add,
    remove,
    submit
};