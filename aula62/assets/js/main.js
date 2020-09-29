const taskInput = getId('task');
const btnAddTask = getId('add-task');
const tasksList = getId('tasks');

function createLi() {
    return document.createElement('li');
}

function isValidInput(input){
    if(!input) return;
   
    return input;
}

function createTask(value){
    if(isValidInput(value)){
        const li = createLi();
        li.innerHTML = value;
        tasksList.appendChild(li);
        createBottonDelete(li);
        saveTask();
    }
    
}

function clearInput(){
    taskInput.value = '';
    taskInput.focus();
}

function createBottonDelete(li) {
    li.innerText += ' ';
    const deleteBotton = document.createElement('button');
    deleteBotton.innerText = "Apagar";
    deleteBotton.setAttribute('class', 'delete'); 
    li.appendChild(deleteBotton);
}

function saveTask(){
    const liTask = tasksList.querySelectorAll('li');
    const listTask = [];
    for (const task of liTask) {
        let taskText =  task.innerText;
        taskText = taskText.replace("Apagar", "").trim();
        listTask.push(taskText);
    }
    storageJson(listTask);
    // const taskJson = JSON.stringify(listTask);
    // localStorage.setItem('Lista de Tarefas', taskJson);
}

function storageJson(listTask) {
    const taskJson = JSON.stringify(listTask);
    return localStorage.setItem('Lista de Tarefas', taskJson);
}

function addTaskSave() {
    const tasks = localStorage.getItem("Lista de Tarefas");
    const taskList = JSON.parse(task);

    for(let task of taskList){
        createTask(task);
    }
}

taskInput.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(isValidInput(taskInput)) {
            createTask(taskInput.value);
        }
    }
})

btnAddTask.addEventListener('click', function(e){
    const inputValue =  taskInput.value;
    createTask(inputValue);
    clearInput();
})

document.addEventListener('click', function(e){
    const element = e.target;

    if(element.classList.contains("delete")){
       element.parentElement.remove();
       saveTask();
    }
})

addTaskSave();
