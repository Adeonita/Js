let unorderedList = document.querySelector('ul');
let input = document.querySelector('input');
let buttonAdd = document.querySelector('#button-add');
let buttonDelete = document.querySelector('.button-delete');
console.log(buttonDelete);
buttonAdd.onclick = function () {
    let newItem = document.createElement('li');
    let newButton = document.createElement('button'); //create new button 
    newButton.classList.add('button-delete'); //add class button-delete in button 
    newButton.createTextNode('delete');
   // newButton.append('delete'); //push text 'delete' in button
    let valueItem = input.value;
    if(valueItem != ''){
        unorderedList.appendChild(newItem).append(valueItem, newButton);
    }
}

buttonDelete.onclick = function (){
    let parent = this.parentElement;
    console.log(parent);
}