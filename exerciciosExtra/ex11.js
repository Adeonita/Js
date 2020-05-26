/**
 * Sabendo isso, crie uma função chamada caloriasDeTrote(), 
 * que recebe por parâmetro o número de voltas representado por um valor 
 * numérico e retorne a quantidade de calorias que será consumida.
 */

function caloriasDeTrote(numeroDeVoltas){
    var caloriasConsumidas = 0;
    let caloria = 5;

    for(let i = 1; i <= numeroDeVoltas; i++){
        let voltaAtual = i;
        let totalCaloria = caloria * voltaAtual;
        caloriasConsumidas = caloriasConsumidas + totalCaloria;
    }
    return caloriasConsumidas;
}

console.log(caloriasDeTrote(2));