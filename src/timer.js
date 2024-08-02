let timerWidthNumerator;
let timerWidthDenumerator;

let timer;
let timerDiv;

//add colors based on time left
function update(){
    if(timerWidthNumerator <= timerWidthDenumerator){
        timerWidthNumerator += 10;
        const tmpTimerWidth = timerWidthNumerator / timerWidthDenumerator;
        timerDiv.style.height = (tmpTimerWidth*100) + "%";
    } else{
        stop();
        //gameOver function
    }
}

const init = function(gameDuration, div){
    timerDiv = div;
    timerWidthNumerator = 0;
    timerWidthDenumerator = gameDuration * 1000;
}

const start = function(){
    timer = setInterval(update, 10);
}

const stop = function(){
    clearInterval(timer);
}

export default {
    init,
    start,
    stop
};