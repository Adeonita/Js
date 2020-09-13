function max (x, y) {

    return x > y 
        ? x 
        : y;
}

const max2 = (x, y) => x > y ? x : y;

const ePaisagem = (largura, altura) => largura > altura;

function testMax () {
    const numbers = [ [3, 2], [2, 3], [3, 3], [-3, 3]];
    for (let number of numbers){
        let [ firstNumber, secondNumber ] = number;
        const bigger = max(firstNumber, secondNumber);
        if ( bigger === 3) {
            console.log('pass');
        }
        else{
            console.log(`expect value to equal ${bigger} received ${bigger}`) 
        }
    }   
}

testMax();
console.log(ePaisagem(1, 2));
console.log(ePaisagem(2, 1));