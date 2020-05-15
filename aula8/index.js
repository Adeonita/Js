const nome = 'Adeonita';
const sobrenome = 'dos Santos';
const idade = 30;
const peso = 70;
const altura = 1.80;
let imc = Math.round(peso/(altura * altura));
let anoDeNascimento = 2020 - 30;

let frase = `${nome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc}. Nasceu em ${anoDeNascimento}`;
console.log(frase);
