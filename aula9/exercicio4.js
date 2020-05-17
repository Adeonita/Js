function experience(anos){
    if(anos < 0){
        console.log('Valor Inválido');
    }else if(anos == 0 || anos == 1){
        console.log('Iniciante');
    }else if(anos > 1 && anos <= 3){
        console.log('Intermediário');
    }else if(anos > 3 && anos <=6){
        console.log('Avançado');
    }else if(anos >= 7){
        console.log('Jedi Master');
    }
}

anosDeEstudo = 7;
experience(anosDeEstudo);