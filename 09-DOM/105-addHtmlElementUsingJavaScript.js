// Topic 105: Add HTML element using JavaScript

// get the list element 
const todoList = document.querySelector(".todo-list");
console.log(todoList);
console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>updated inner HTMl </li>";
todoList.innerHTML += "<li>Todo 2</li>";
todoList.innerHTML += "<li>Todo 3</li>";

// Why should we not use this way?
// It is very slow because as with every manipulation of innerHTML,
// we have to parse the content again so that's why it takes time. 

// When to use this way?
// If you have to change the entire innerHTML, you could use this method. 
// Avoid using this wi




