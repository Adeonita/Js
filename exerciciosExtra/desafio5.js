function maisMenos(valores){
   
    var positivos = 0;
    var zeros = 0;
    var negativos = 0;
    
    for(let i = 0; i < valores.length; i++){
       if(valores[i] > 0){
           positivos = positivos + 1;
       }else
            if(valores[i] == 0){
                zeros = zeros + 1;

            }
        else
            if(valores[i] < 0){
                negativos = negativos + 1;

            }
    }

    var totais = [];
    totais.push(positivos, zeros, negativos);
    var percentuais = [];
    for(let i = 0; i < totais.length; i++){
        let x = valores.length;
        p = ((100 * totais[i] / x ) / 100);
        percentuais.push(p);
    }
    return percentuais;
}
console.log(maisMenos([1,0]));