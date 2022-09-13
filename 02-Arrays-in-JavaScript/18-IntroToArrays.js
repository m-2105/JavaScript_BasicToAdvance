// Topic 18: Introduction to Arrays
// Reference Data type -> Non-Primitive Values
// 1. All reference types are objects in JavaScript
// 2. Reference datatypes are Mutable

// 1. array -> ordered collection of items
// Create an array using let
let fruits = ["apple", "mango", "banana", "grapes"];
console.log(fruits[2]);
console.log(fruits);
console.log(fruits.length); // returns numbers of element in array

// Create an array using var
var number = [1, 2, 3, 4, 5, 6];
console.log(number);

// Mixed Datatypes
let mixed = [1, 2, 3, 'apple', 'mango', null, true, undefined];
console.log(mixed);
console.log(typeof mixed); // returns object
mixed[2] = 44;
console.log(mixed);
console.log(`Is var 'mixed' an array? ${Array.isArray(mixed)}`);
// let obj = {} // object literal

