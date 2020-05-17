// Objetos em javasript
    var aluno = {
        nome : 'Adeonita',
        idade: 23,
        peso: 70,
        stack: 'php'
    };

    console.log(aluno.nome);


//Operações matemáticas
    var x =10; 
    var y = x/2;
    var z = y ** 2;
    console.log(z);


//Funções 
    function soma(n1, n2){
        var resultado = n1+n2;
        return resultado;
    }

    var resultado = soma(2,3);
    console.log(resultado);


//Condicionais
    function getSex(sex){
        //Com if
        var gender;
        if(sex == 'M'){
            gender = 'Masculino';
        }else if(sex == 'F'){
            gender = 'Feminino';
        }else{
        gender = 'Outros';
        }
        return gender;
    //com swith
        switch(sex){
            case 'M':
                return 'Masculino';
            case 'F':
                return 'Feminino';
            default:
                return 'Outros';
        }

    }

    var resultado = getSex('z');
    console.log(resultado);

//Operadores Logicos
    var sexo = 'M' , idade = 23;
    if(sexo == 'M' && idade >= 18){
        console.log('ok!');
    }

    var sexo = 'F';
    var testSex = sexo ==='M';
    console.log(testSex);

//Ternario
    sex = 'M';
    var t = (sex == 'M') ? 'Masculino' : 'Feminino';
    console.log(t);

//Estruturas de repeticoes
    for(var i = 0; i <= 10; i++){
        console.log(i);
    }

    i = 2;
    while(i < 5){
        console.log(i);
        i++;
    }
