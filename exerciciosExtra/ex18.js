function lucroTotal4(umPeriodo) {
    var soma = 0;
    soma = soma + umPeriodo[0];
    soma = soma + umPeriodo[1];
    soma = soma + umPeriodo[2];
    soma = soma + umPeriodo[3];

    return soma ;

}

var lucrosPrimeiroQuadrimestre = [1, 2, 3, 4];
console.log(lucroTotal4(lucrosPrimeiroQuadrimestre));