/**
 * Exercicio extra 2
 * 
 * Agora vamos criar uma função que nos diga se o banco está fechado?
 * Primeiro de tudo precisamos saber que um banco está fechado quando é 
 * fim de semana (sábado ou domingo) e não está no horário bancário (9 às 15hs).
 * 
 * Defina a função possoIrAoBanco que, receba dois parâmetros, 
 * o primeiro é diaDaSemana (string) e o segundo horaAtual(numero), 
 * a função deve retornar true, apenas se o banco estiver aberto
 */

function possoIrAoBanco(diaDaSemana, horaAtual){
    return (!(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo')) && (horaAtual >= 9 && horaAtual <= 15) ;
}


console.log(possoIrAoBanco('Sábado', 11));
console.log(possoIrAoBanco('Domingo',13));