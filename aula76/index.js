const names = ["Adeonita", "Junior", "Oreo"];
const cloneNames = names; //copia por referência, o que é feiro em cloneNames reflete em names
const cpNames = [...names]; //Copia sem refrência

cpNames.pop();
cloneNames.pop();
cpNames.unshift("Insere no começo");
cpNames.push("Insere no final");
const slice = cpNames.slice(1,-1);
console.log(names);
console.log(cloneNames);
console.log(cpNames);
console.log(slice);


const nomes = ['Adeonita', 'dos', 'santos'];
const nome = nomes.join(' ');
console.log(nome);