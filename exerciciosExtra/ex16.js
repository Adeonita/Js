/**
 * Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um número como parâmetro. 
 * Usando apenas o máximo de um “if” apenas. Talvez os arrays possam ser úteis aqui.

    Você tem que devolver a medalha que corresponde às primeiras posições de uma competição:
 */
function medalhaDeAcordoComPosto(numero){
    let medalhas = ['ouro', 'prata', 'bronze'];
    if(numero > medalhas.length){
        return 'nada';
    }
   return medalhas[numero - 1];
}
console.log(medalhaDeAcordoComPosto(1))
console.log(medalhaDeAcordoComPosto(2))
console.log(medalhaDeAcordoComPosto(3))
console.log(medalhaDeAcordoComPosto(4))
console.log(medalhaDeAcordoComPosto(5))
