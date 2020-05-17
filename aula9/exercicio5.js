var usuarios = [
    {
        nome: 'Diego',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
        nome: 'Gabriel',
        habilidades: ['VueJs', 'Ruby', 'Elixir']
    }
];

function frase(object){
    for(const i of object){
        console.log(`O ${i.nome} possui as habilidades: ${i.habilidades.join(', ')}`);
    }
}

frase(usuarios); 