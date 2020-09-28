const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const doubleNumber = numbers.map(number => {
    return number * 2;
});

const persons = [
    { name: 'Luiz', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Eduardo', age: 55 },
    { name: 'Leticia', age: 19 },
    { name: 'Rosana', age: 32 },
    { name: 'Wallace', age: 47 },
];

const names = persons.map(object => object.name);
const ages = persons.map(object => ({ idade: object.age}));
const id = persons.map((object, index) => {
   const newObj =  {...object, id: index};
   return newObj;
});

console.log(persons);
console.log(names);
console.log(doubleNumber);
console.log(ages);
console.log(id);