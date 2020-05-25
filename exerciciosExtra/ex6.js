function medalhaSegundoOPosto(posto){
    if(posto == 1){
       return 'ouro';
    }else
        if(posto == 2){
            return 'prata';
        }
    else
        if(posto == 3){
            return 'bronze';
        }
    else{
        return 'Continue participando';
    }
}


console.log(medalhaSegundoOPosto(1))
//"ouro"
 medalhaSegundoOPosto(2)
//"prata"
 medalhaSegundoOPosto(3)
//"bronze"
medalhaSegundoOPosto(5)
//"Continue participando"
medalhaSegundoOPosto(9)
