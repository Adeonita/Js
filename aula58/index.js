// try{
//     console.log(minhaVar);
// }catch(error){
//     console.log('Minha var não existe');
// };

function sum(x, y) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number'){
        throw(`${x} and ${y} need to be numbers`); //lançando o erro
    }
}
try{
    sum('a', 'c');
}catch(error){ //capturando o erro
    console.log(error);
}