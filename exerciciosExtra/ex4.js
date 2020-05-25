/*
Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição previdenciária que uma pessoa tem, exemplo:

 podeSeAposentar(62, "F", 34)
true
Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, enquanto que para homens é 65. Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.
*/

function podeSeAposentar(idade, sexo, anosDeContribuicao){
    if(anosDeContribuicao >= 30){
        if(sexo == 'F' && idade >= 60){
            return true;
        }if(sexo == 'M' && idade >= 65){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

console.log(podeSeAposentar(58, 'F', 35) )
console.log(podeSeAposentar(63, 'M', 35))
console.log(podeSeAposentar(59, "F", 29))
console.log(podeSeAposentar(58, 'M', 35))