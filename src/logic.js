import gameState from './gamestate';
import symbol from './symbol';

let target = [
    {
        used: false,
        symbol: -1
    },
    {
        used: false,
        symbol: -1
    },
    {
        used: false,
        symbol: -1
    },
    {
        used: false,
        symbol: -1
    }
];

const generate = function(){
    for(let i = 0; i < target.length; i++){
        target[i].symbol = Math.floor(Math.random() * gameState.numOfSym);
    }

    console.log(target);
}

const check = function(){
    let red = 0;
    let yellow = 0;

    for(let i = 0; i < target.length; i++){
        target[i].used = false;
    }

    console.log('provera');
    console.log(gameState.komb);

    for(let i = 0; i < target.length; i++){
        if(target[i].symbol === gameState.komb[i]){
            red++;
            target[i].used = true;
        }
    }

    for(let i = 0; i < target.length; i++){
        if(target[i].symbol !== gameState.komb[i]){
            let index = target.findIndex(a => ((a.symbol === gameState.komb[i]) && !a.used));
            if(index !== -1){
                yellow++;
                target[index].used = true;
            }
        }
    }

    let isWin = red === gameState.numOfFld;
    
    let fields = document.getElementById(`rez-${gameState.row}`).children;
    for(let fld of fields){
        if(red > 0){
            fld.style.backgroundColor = 'red';
            red--;
        } else if(yellow > 0){
            fld.style.backgroundColor = 'yellow';
            yellow--;
        }
    }

    return isWin;
};

const showAnswer = function(){
    for(let i = 0; i < target.length; i++){
        let fld = document.getElementById(`answer-${i}`);
        fld.style.backgroundImage = `url(${symbol.images[target[i].symbol]})`;
        fld.style.backgroundSize = 'cover';
    }
}

export default {
    generate,
    check,
    showAnswer
};