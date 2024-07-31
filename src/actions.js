import gameState from './gamestate';

const images = ['../images/Pik.png', '../images/Karo.png', '../images/Skocko.png', 
    '../images/Tref.png', '../images/Herc.png', '../images/Zvezda.png'];

const symbols = new Map();
symbols.set('pik', 0);
symbols.set('karo', 1);
symbols.set('skocko', 2);
symbols.set('tref', 3);
symbols.set('herc', 4);
symbols.set('zvezda', 5);


/*
    !need to be closure functions
*/

const add = function(e){
    let key = e.target.id;

    let index = gameState.filled.findIndex((a) => a === false);
    if(index == -1){
        return;
    }
    
    gameState.komb[index] = symbols.get(key);
    gameState.filled[index] = true;
    
    let fldIndex = gameState.row*gameState.numOfFld + index;
    let fld = document.getElementById(`${fldIndex}`);
    fld.style.backgroundImage = `url(${images[symbols.get(key)]})`;
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

export default {
    add,
    remove
};