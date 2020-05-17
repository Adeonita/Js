function temHabilidade(skills){
    var tem = skills.indexOf('Javascript');
    if(tem != -1){
        return true;
    }return false;
}
var skills = ['Javascript', 'ReactJs', 'React Native'];
console.log(temHabilidade(skills));