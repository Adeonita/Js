function createPerson(firstName, lastName, age, heigth, weight ){
    return {
        firstName,
        lastName, 
        fullName: `${firstName} ${lastName}`,
        age,
        storage(fullName, age){
            return `${firstName} foi salvo no banco de dados`;
        },
        get imc(){
            const indiceMC = weight / (heigth * heigth); //usar ou não o this?
            return indiceMC.toFixed(2);
        }
    }
}

const person = createPerson("Adeonita", "dos Santos", 24, 1.80, 80);
console.log(person.storage());
console.log(person.imc);
const person2 = createPerson("Adeonita", "dos Santos", 24, 1.63, 80);
console.log(person2.storage());
console.log(person2.imc);