function lucroTotal(umPeriodo) {
    var soma= 0;
    var mes = 0;
    for (var i=0; i< umPeriodo.length; i++) {
      mes = umPeriodo[i];
      soma= soma+ mes;
    }
    return soma;
}

function quantidadeDeMesesComLucro(umPeriodo) {
    var quantidade = 0;
    for (let mes = 0; mes < umPeriodo.length; mes++) {
       if(umPeriodo[mes] > 0){
           quantidade = quantidade + 1;
       }
    }
    return quantidade;
}

let umPeriodo = [2, 10, -20];
let q = quantidadeDeMesesComLucro(umPeriodo)
console.log(q);
//console.log(lucroTotal([100]))
//console.log(lucroTotal([100, 2]))
//console.log(lucroTotal([2, 10, -20]))
//console.log(lucroTotal([2, 10, -20, 0, 0, 10, 10]))
