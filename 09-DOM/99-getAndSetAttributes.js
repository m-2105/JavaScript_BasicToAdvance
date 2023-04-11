// Topic 99: Get and Set Attributes

// Example 1
const link = document.querySelector("a"); // returns an anchor tag
console.log(link);
console.log(link.getAttribute("href")); //get attributes is a method
link.setAttribute("href","https://developer.mozilla.org/en-US/");
console.log(link.getAttribute("href")); 

// Example 2
const input = document.querySelector("#enter-todo");
console.log(input);
console.log(input.getAttribute("type"));
input.setAttribute("type", "email");
console.log(input.getAttribute("type"));
