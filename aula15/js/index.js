let numero = Number(prompt('Digite um número'));
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');
numeroTitulo.innerHTML =  numero;
texto.innerHTML = `<p> O dobro de ${numero} é ${numero * 2} </p>
                   <p> A raiz quadrada de ${numero} é ${ Math.round((numero ** (1/2)))} </p>
                   <p> isInteger : ${Number.isInteger(numero)} </p>
                   <p> isNaN : ${isNaN(numero)} </p>
                   <p> Arredondando para cima: ${Math.ceil(numero)} </p>
                   <p> Arredondando para baixo: ${Math.floor(numero)} </p>
                    `