/**
 * Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele
 */

 function somatoria(numero){
     var totalSoma = 0;
     for(i = 0; i < numero; i++){
        totalSoma = totalSoma + i;
     }
     return totalSoma;
 }

 console.log(somatoria(4));