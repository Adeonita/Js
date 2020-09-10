const saudacao = () => 'Oi!';

console.log(saudacao());

const pessoa = {
    nome: 'Ade',
    sobrenome: 'dos Santos',

    cretePerson(){
        return {message: `Meu nome é ${this.nome} ${this.sobrenome}`};
    },

}

console.log(pessoa.cretePerson());