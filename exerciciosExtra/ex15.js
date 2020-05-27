/**
 * Escreva a função contem(array, numero) que nos diz se um array contém um determinado elemento.
 */

function contem(array, numero){
    let tem = array.indexOf(numero)
    if(tem == -1){
        return false;
    }return true

}
console.log(contem([1, 6, 7, 6], 7));
