/**
 * Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.
    
    var umArray = [1, 2, 3];
    var outroArray = [4, 5];

    mover(umArray, outroArray);

    umArray //deveria ser [1, 2]
    outroArray //deveria ser [4, 5, 3]
 */

function mover(array1, array2){
    let ultimoElemento = array1.pop();
    array2.push(ultimoElemento);
}

 
var umArray = [1, 2, 3];
var outroArray = [4, 5];

mover(umArray, outroArray);
