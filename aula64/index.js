const rand = (min = 1000, max = 3000) => {
    const num = Math.random() * (max - min ) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if(callback) {
            callback();
        }
    }, rand());
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if(callback) {
            callback();
        }
    }, rand());
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if(callback) {
            callback();
        }
    }, rand());
}

f1(f1Callback); //hoisting

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log("Muitas funções");
}


// function callf3() { 
//     return f2(function(){
//         f3();
//     });
// }

// f1(callf3());

// f1(function() { //f1 recebe um callback que é uma chamada para f2
//     f2(function() {
//         f3(function(){
//             console.log('Uma função que chama a outra ;(')
//         });
//     });
// });
