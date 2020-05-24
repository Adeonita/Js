/**
 * Exercicio extra 1
 * 
 * Podemos dizer que é um número da sorte se o número:
 * é positivo
 * é um múltiplo de 2 ou 3
 * não é 15
 * 
 * Escreva a função eNumeroDaSorte que, recebendo um número, diz a se é um número da sorte. 
 * Lembre-se de que o número deve obedecer às três condições mencionadas. 
 * Seu desafio adicional será: NÃO use o if.
 */


function eNumeroDaSorte(numero){
return numero > 0 && (numero % 2 == 0 || numero % 3 == 0) && numero != 15;
}

console.log(eNumeroDaSorte(18));