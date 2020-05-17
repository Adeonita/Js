
function getPar(n1, n2){
    var inicio = n1;
    var fim = n2;

    for(var i = inicio; i < fim; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}

getPar(1,10);