const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filterNumbers = numbers.filter(number => number > 10);
// console.log(filterNumbers.sort());

const persons = [
    { name: 'Luiz', idade: 62 },
    { name: 'Maria', idade: 23 },
    { name: 'Eduardo', idade: 55 },
    { name: 'Leticia', idade: 19 },
    { name: 'Rosana', idade: 32 },
    { name: 'Wallace', idade: 47 },
];

const fiveLettres = persons.filter(object => {
    return object.name.length >= 5;
});

const yers50 = persons.filter(object => {
    return object.idade > 50;
});

const finishNameWithA = persons.filter(object => {
    return object.name.toLocaleLowerCase().endsWith('a');
});

console.log(fiveLettres);
console.log(yers50);
console.log(finishNameWithA);