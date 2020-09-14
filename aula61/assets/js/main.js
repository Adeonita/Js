function getId(id) {
    return document.getElementById(id);
}

const timer = getId("timer");
const start = getId("start");
const pause = getId("pause");
const pare = getId("restart");
let seconds = 0;
let count;

function getDateForSecond(second) {
    const date = new Date(second * 1000); //data zero
   
    return date.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'GMT'
    });
}

function startTime(){
    count = setInterval(function(){
        seconds++;
        timer.innerHTML = getDateForSecond(seconds);
    }, 1000);
    return count;
}

start.onclick = () => {
    clearInterval(count);
    startTime();
}

pause.onclick = () => {
    clearInterval(count);
}

pare.onclick = () => {
    clearInterval(count);
    timer.innerText = '00:00:00';
    seconds = 0;
}

