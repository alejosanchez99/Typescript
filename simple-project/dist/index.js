"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.getElementById("todoform");
const list = document.getElementById("todolist");
const readTodos = () => {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON === null)
        return [];
    return JSON.parse(todoJSON);
};
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const createTodo = (todo) => {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
};
const todos = readTodos();
todos.forEach(createTodo);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
});
// (<HTMLInputElement>input).value;
// btn.addEventListener("click", () => {
//   console.log(input.value);
// });
// let mystery: unknown = "Hello World!!";
// const numChars = (mystery as string).length;
