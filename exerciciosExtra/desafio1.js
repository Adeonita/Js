/**
 * Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 
 * 2. aberturas, que utiliza um array com os arrays dos estudantes que entraram nos outros dias,
 *  e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não. Por exemplo:
 */


function acontece(atrasos, quantidade){
    var alunosPresentes = 0;
    for(let i = 0; i < atrasos.length; i++){
        if(atrasos[i] <= 0){
            alunosPresentes = alunosPresentes + 1;
        }
    }
    if(alunosPresentes >= quantidade){
        return true;
    }return false;
}

function aberturas(arrayAtrasos, quantidade){
    var temAula = [];
    for(let i = 0; i < arrayAtrasos.length; i++){
      temAula.push(acontece(arrayAtrasos[i], quantidade));
    }
    return temAula;
}
var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerça = [4, 6, 3, 0];
var alunosDaQuarta = [10, -5, 3, 0];
console.log(aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 3));
//console.log(acontece(alunosDaSegunda, 2));