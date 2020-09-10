/************* FOR IN *************/
/*
//Itera sobre as chaves do array, retornando seus índices
const frutas = ['Pera', 'Maçã', 'Uva'];

for (const fruta in frutas) {
    console.log(frutas[fruta]);
}

const person = {
    nome: 'test',
    sobrenome: 'test',
    idade: 20,
}

for ( const key in person ) {
    console.log(person[key]);
}
*/

/************** FOR OF **********************/
//Itera sobre as chaves do array retornando seu valor 
const name = "Adeonita";
for ( let value of name ) {
    console.log(value);
}  

/************** FOREACH **********************/
//É usado como método de um vetor, e pode retornar tanto índice quanto valor
const v = ['indice1', 'indice2'];
v.forEach((element, index) => {
    console.log(element, index);
});
