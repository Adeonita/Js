function escada(altura){
    var escada = [];
    for(let i = 1; i <= altura; i++){
       escada.push('#'.repeat(i));
    }
    return escada;
}

console.log(escada(5));

