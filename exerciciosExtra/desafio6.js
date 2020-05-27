/**
 * As árvores utópicas  crescem de uma forma particular, em dois ciclos:

cada primavera dobram seu tamanho
cada verão crescem um metro
Se Laura planta uma árvore utópica com um metro, no final do outono, qual seria sua altura depois de N ciclos?

Alguns exemplos:

si N = 0, sua altura será 1 metro (não cresceu nada)
si N = 1, sua altura será de 2 metros (dobrou a altura na primavera)
si N = 2, sua altura será de 3 metros (cresceu um metro mais no verão)
si N = 3, sua altura será de 6 metros (dobrou a altura na primavera seguinte)
n = 4 , alt =7
n=5 alt = 14
n=6 alt = 15
E assim ...
Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento, e retorne a altura resultante da árvore de Laura.
 * 
 */

function alturaArvoreUtopica(N){
    var tamanhoArvore = 1;

    if(N > 0){
        var ciclo = 'primavera';
        for(i = 0; i < N; i++){
            if(ciclo == 'primavera'){ 
                tamanhoArvore = tamanhoArvore * 2;
                ciclo = 'verao';
            }else
                if(ciclo == 'verao'){
                    tamanhoArvore = tamanhoArvore + 1;
                    ciclo = 'primavera';
                }
                
        }
        return tamanhoArvore;
    }return tamanhoArvore;
}

console.log(arvoreUtopica(6));