const form = document.querySelector('#form');
const persons = [];
const salvos = document.querySelector('form');

function createPerson(firstName, lastName, height, weight) {
    
    return addPerson(
        {
            nome: `${firstName} ${lastName}`,
            altura: height,
            peso: weight,
        }
    );
}

function addPerson(person) {
    persons.push(person);
   
    return persons;
}

const getUser = form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = getElement('#form', '#nome');
    const lastName = getElement('#form','#sobrenome');
    const height = getElement('#form','#altura');
    const weight = form.querySelector('#peso').value;
    console.log(createPerson(firstName, lastName, height, weight));
});
