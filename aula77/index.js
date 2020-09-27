const names = ['Maria', 'João', 'José'];

const pop = names.splice(-1, 1);
const shift = names.splice(0, 1);
const unshift = names.splice(0, 0, "Insere no inicio");
const push = names.splice(names.length, 0 , "Insere no fim");

console.log(names);