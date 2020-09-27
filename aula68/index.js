function Person(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;

    this.getName = () => {
        return `${firstName} ${lastName}`;
    }
}


const people = new Person('Adeonita', 'dos Santos');
const people2 = new Person('adê', 'S');

console.log(people.getName());
console.log(people2.firstName);
