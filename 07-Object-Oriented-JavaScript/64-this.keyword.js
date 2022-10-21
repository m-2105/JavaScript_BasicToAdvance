// Topic 64: this keyword

'use strict'; // indicate that the code should be executed in "strict mode". 
// With strict mode, you can not use undeclared variables.

console.log(this); // print window object details
console.log(window); // print window object details
console.log(this === window) // returns true

function myFunc() {
    console.log(this);
}

window.myFunc(); // window contains this myFunc function

myFunc(); // returns undefined as myFunc is undeclared

const decFunc = () => {
    console.log(this)
}
decFunc(); // returns window object details