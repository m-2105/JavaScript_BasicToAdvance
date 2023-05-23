// Topic 106: createElement, append, prepend, remove, before, after

const todoList = document.querySelector(".todo-list");

//Long method
//document.createElement
const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("New Todo");
//append - adds the element in last
newTodoItem.append(newTodoItemText); 
todoList.append(newTodoItem);

//short method
const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "Todo 3";
todoList.append(newTodoItem2);

//prepend - adds the element in start
const newTodoItem3 = document.createElement("li");
newTodoItem3.textContent = "Very First Todo";
todoList.prepend(newTodoItem3);

//remove