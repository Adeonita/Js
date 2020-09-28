const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const amout = numbers.reduce((acumulator, value, index, array) => {
    acumulator.push(value * 2);
   
    return acumulator;
}, []);

const amout1 = numbers.reduce((acumulator, value, index, array) => {
    if(value % 2 === 0){
        acumulator.push(value);
    }
    
    return acumulator;
}, []);

const amout2 = numbers.reduce((acumulator, value, index, array) => {
    return acumulator + value;
   
}, 0);


// console.log(amout);

const persons = [
    { name: 'Luiz', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Eduardo', age: 55 },
    { name: 'Leticia', age: 19 },
    { name: 'Rosana', age: 32 },
    { name: 'Wallace', age: 47 },
];

const older = persons.reduce( function(acumulator, value) { 
   if(acumulator.age > value.age) return acumulator;
   return value;

}, 0)

console.log(older);