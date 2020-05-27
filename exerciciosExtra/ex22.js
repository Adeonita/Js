function naipeDeTruco(nipe){
    var cartas = [];
    for( let i = 1; i <= 12; i++){
        if(i != 8 && i != 9 ){
            cartas.push(i + ' de ' + nipe);
        }
    }
    return cartas;
}

console.log(naipeDeTruco("espadas"));