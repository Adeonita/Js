const content = document.querySelector('.container h1');

// const semana = (dia) => {
//     const name = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
//     if (dia === 0 || dia === 6){
//         return name[dia];
//     }
//     return `${name[dia]}-feira`;
// };

// const mesEscrito = (dia) => {
//     const name = [
//                     'janeiro', 'fevereiro', 'março', 'abril',
//                     'maio', 'junho', 'julho', 'agosto', 
//                     'setembro', 'outubro', 'novembro', 'dezembro'
//                 ];
//     return name[dia];
// };

// const createData = () => {
//     const data = new Date();
//     const dia = data.getDate();
//     const mes = data.getMonth() + 1;
//     const ano = data.getFullYear();
//     const diaDaSemana = data.getDay();
   
//     return `${dia} de ${mesEscrito(mes)} de ${ano}, ${semana(diaDaSemana)} ${data.getHours()}:${data.getMinutes()}`;
// }

// content.innerHTML = createData();

const data = new Date();
const options = {
    dateStyle: 'full',
};
content.innerHTML = data.toLocaleDateString('pt-BR', options);