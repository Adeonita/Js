/**
 * No parque de diversões da cidade, eles instalaram uma nova montanha-russa e nos pediram ajuda 
 * para que pudéssemos notificar as pessoas, se poderiam entrar ou não, antes de fazer a fila. Os requisitos para uma pessoa poder entrar no brinquedo são:

Atingir a altura mínima de 1,5 m (ou 1,2 m, se acompanhada por um adulto)
Não ter qualquer problema cardíaco

Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano),
 temProblemaCardiaco (booleano), retorne true ou false conforme o caso. Levar em conta as condições necessárias mencionadas acima.

 podeSubir(1.7, false, true)
false // não pode subir
      // porque embora seja maior do que 1.5m,
      // tem um problema cardíaco
 */


function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco){
    if(!temProblemaCardiaco){
        if(alturaPessoa >= 1.5){
            return true;
        }else
            if(alturaPessoa >= 1.2 && vemComCompania){
                return true;
            }return false;

    }return false
}

console.log(podeSubir(1.5, false, false));
console.log(podeSubir(1.1, true, false));

console.log(podeSubir(1.7, false, true))
console.log(podeSubir(1.7, false, false))
console.log(podeSubir(1.2, false, true))
console.log(podeSubir(1.2, true, true))
console.log(podeSubir(1.2, false, false))
console.log(podeSubir(1.2, true, false))