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
    fld.style.backgroundSize = 'cover';
    
    console.log(gameState);
}

const remove = function(e){
    let fld = e.target;
    let index = Number.parseInt(fld.id) % gameState.numOfFld;
    gameState.filled[index] = false;
    fld.style.backgroundImage = 'none';

    console.log(gameState);
}

/* just testing add and remove on more rows */
const submit = function(e){
    logic.check();
    gameState.nextRow();
    console.log(gameState);
}

export default {
    add,
    remove,
    submit
};