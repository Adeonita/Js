var endereco  = {
    rua: "Alameda das Pedreiras",
    numero: 8,
    bairro: 'Calabetão',
    cidade: 'Salvador',
    uf: 'BA'
}

function returnEnd(endereco){
    var frase = `O usuario mora em ${endereco.cidade} / ${endereco.uf}, 
                 no bairro ${endereco.bairro},
                 na rua "${endereco.rua}" com nº ${endereco.numero}`;
    return frase;
}   

console.log(returnEnd(endereco));