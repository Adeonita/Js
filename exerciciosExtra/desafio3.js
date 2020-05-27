function fatorial(numero){
    if(numero == 1 || numero == 0){
        return numero;
    }else{
        var fatorial = 1;
        for(let i = numero; i >= 1; i--){
            fatorial = fatorial * i;
        }
        return fatorial;
    }
}

console.log(fatorial(7));