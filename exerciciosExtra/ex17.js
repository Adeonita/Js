function somaLucroSemestre(umSemestre) {
    return umSemestre[0] + umSemestre[1] +
          umSemestre[2] + umSemestre[3] +
          umSemestre[4] + umSemestre[5];
  }

  var lucroUltimoSemestre = [50, -12, 1000, 300, 200, 0];
  var lucrosPrimeiroTrimestre = [80, 453, 1000];
  var lucrosPrimeiroQuadrimestre = [1000, 345, 8, 9];

  console.log(somaLucroSemestre(lucroUltimoSemestre));
  console.log(somaLucroSemestre(lucrosPrimeiroTrimestre));
  console.log(somaLucroSemestre(lucrosPrimeiroQuadrimestre));


