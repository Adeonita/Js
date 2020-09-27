function* generated() {
    yield 'V1';
    yield 'V2';
    yield 'V3';
}

// const generate = generated();
// console.log(generate.next().value);
// console.log(generate.next().value);
// console.log(generate.next().value);
// console.log(generate.next());

function* generated2() {
    yield 0;
    yield 1;
    yield 2;
}

function* generated3() {
    yield* generated2();
    yield 3;
    yield 4;
    yield 5;
}

const gen = generated3();

for( let value of gen) {
    console.log(value);
}


function* generated4() {
    yield function(){
        return 'yield 1';
    };

    yield function(){
        return 'yield 2';
    };
}

const g4 = generated4();
const function1 = g4.next().value;
const function2 = g4.next().value;

console.log(function1());
console.log(function2());
