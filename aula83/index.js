function Person(fistName, lastName) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.age = 24;

    this.getDataNascimento = () => {
        const courrentDate = new Date();
        return courrentDate.getFullYear() - this.age;
    }
}

const person = new Person("Adeonita", "S");
console.log(person.fistName, person.lastName,person.getDataNascimento());