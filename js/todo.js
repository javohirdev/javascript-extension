const todoForm = document.getElementById("todo-form"); //todo input
const todoList = document.getElementById("todo-list"); //ul
const todoInput = document.querySelector("#todo-form input");

let KEY = "todos";
let toDo = [];

const paintToDo = (newTodo) => {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", delToDos);
    li.appendChild(button);
    todoList.appendChild(li);
}

const saveToDos = () => {
    localStorage.setItem(KEY, JSON.stringify(toDo));
}

const delToDos = (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDo = toDo.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDo.push(newObj);
    paintToDo(newObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);
  
const savedToDos = localStorage.getItem(KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDo = parsedToDos;
    parsedToDos.forEach(paintToDo);
}