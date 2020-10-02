function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = () => `Original ${this.firstName} ${this.lastName}`;
}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const p1 = new Person("Adeonita", "S");
const p2 = new Person("Junior", "F");

console.dir(p1);
console.log(p2);