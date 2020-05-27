function quantidadeDeMesesComPerda(umPeriodo) {
    var quantidade = 0;
    for (let mes = 0; mes < umPeriodo.length; mes++) {
       if(umPeriodo[mes] < 0){
           quantidade = quantidade + 1;
       }
    }
    return quantidade;
}

let umPeriodo = [2, 10, -20];
let q = quantidadeDeMesesComPerda(umPeriodo)
console.log(q);