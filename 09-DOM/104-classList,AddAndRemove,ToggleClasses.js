// Topic 104: classList AddAndRemove ToggleClasses

// Goal -> check how many classes have been given to an element
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
console.log(sectionTodo.classList);

sectionTodo.classList.add('bg-dark');
// check if class exists
var check = sectionTodo.classList.contains('bg-dark');
console.log(check);
sectionTodo.classList.remove('bg-dark');

// check if class exists
check = sectionTodo.classList.contains('bg-dark');
console.log(check);

// Check header classes
const headerClass = document.querySelector(".header");
console.log(headerClass);
console.log(headerClass.classList);

// toggle -> adding and removing a class name from an element
headerClass.classList.toggle('bg-dark'); // add class
console.log(headerClass.classList);

// headerClass.classList.toggle('bg-dark'); // remove class
// console.log(headerClass.classList);