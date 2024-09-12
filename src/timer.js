import gameState from './gamestate';

let timer = null;
let remainingTime;
let fullTime;
let animated;

let progressCircle = document.querySelector('.semi-circle[data-type="progress"]');
let blockingCircle = document.querySelector('.semi-circle[data-type="blocking"]');
let helperCircle = document.querySelector('.helper');
let spanTime = document.querySelector('.timer');
let timerCircle = document.querySelector('.timer-circle');

function update() {
    remainingTime -= 10;
    let angle = (remainingTime / fullTime) * 360;
    progressCircle.style.transform = `rotate(${angle}deg)`;

    if(angle <= 180){
        blockingCircle.style.display = 'block';
        helperCircle.style.display = 'none';
    }

    if(angle <= 0){
        gameState.gameOver();
    }

    let seconds = Number.parseInt(remainingTime / 1000);
    if(seconds < 6 && !animated){
        timerCircle.classList.add('animated');
        animated = true;
    }
    
    spanTime.textContent = `${seconds}`;
}

const start = function(gameDuration){
    console.log('timer started')
    fullTime = gameDuration;
    remainingTime = gameDuration;
    animated = false;
    progressCircle.style.display = 'block';
    helperCircle.style.display = 'block';
    timer = setInterval(update, 10);
}

const stop = function(){
    if(timer !== null){
        progressCircle.style.display = 'none';
        blockingCircle.style.display = 'none';
        timerCircle.classList.remove('animated');
        clearInterval(timer);
        timer = null;
    }
}

export default {
    start,
    stop
};