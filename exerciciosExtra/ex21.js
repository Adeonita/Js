function saldoDeMesesComLucro(umPeriodo) {
    var saldo = [];
    for (let mes = 0; mes < umPeriodo.length; mes++) {
       if(umPeriodo[mes] > 0){
            saldo.push(umPeriodo[mes]);
        }
    }
    return saldo;
}

console.log(saldoDeMesesComLucro([100, 20, 0, -10, 10]))