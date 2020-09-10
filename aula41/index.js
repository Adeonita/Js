const semana = (dia) => {
    const name = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    if (dia === 0 || dia === 6){
        return name[dia];
    }
    return `${name[dia]}-Feira`;
} 

const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1 ;
const ano = data.getFullYear() + 2;
const diaDaSemana = data.getDay();
const timeStamp = {
    dia,
    mes,
    ano,
    diaDaSemana: semana(diaDaSemana),
}
console.log(timeStamp);