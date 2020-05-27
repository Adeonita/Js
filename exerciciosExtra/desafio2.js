function produto(numero){
    var produto = 1; 
    for(let i = 0; i < numero.length; i++){
        produto = produto * numero[i];
    }
    return produto;
}

console.log(produto([1, 4, 7]));
