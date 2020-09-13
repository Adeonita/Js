function getHour() {
    const date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function showHour() {

    console.log(getHour());
}

function finishInterval() {
    clearInterval(timer);
}

const timer = setInterval(showHour, 1000);

setTimeout(finishInterval, 4000);

// setTimeout(function (){
//     clearInterval(timer)
// }, 4000);