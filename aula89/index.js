const objA = {
    keyA: 'A',
    speaks: () => "Obj A", 
};

const objB = {
    keyB: 'B'
};

const objC = {
    keyC: 'C'
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.keyA);
console.log(objC.speaks());
console.log(Object.getPrototypeOf(objC));