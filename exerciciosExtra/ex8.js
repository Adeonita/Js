/**
 * Sabendo disso, escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.
 */

function somarMoedasDe25(quantidadeDeMoedas){
    var resultado = 0;

    for(let i = 0; i < quantidadeDeMoedas; i++){
        let valMoedas = 0.25;
        resultado = resultado + valMoedas ;
    }
    return resultado;
}

console.log(somarMoedasDe25(7))