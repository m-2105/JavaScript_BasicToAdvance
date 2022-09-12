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

// Create an array using const
// const fruits3 
const fruits3 = ["apple", "mango"];
// we can add new item to fruits3 as it does not hold element itself, 
// it holds the heap memory address where the elements of array are stored i.e. 0x11
fruits3.push("banana");
// heap memory ["apple", "mango"] 0x11 -> heap memory ["apple", "mango", "banana"] 0x11
console.log(fruits3);
// fruits3 = ["grapes", "pineapple"] //can't modify const itself

// for loop in array
const fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase()); // adds new items to the end of an array
}

// Mixed Datatypes
let mixed = [1, 2, 3, 'apple', 'mango', null, true, undefined];
console.log(mixed);
console.log(typeof mixed); // returns object
mixed[2] = 44;
console.log(mixed);
console.log(`Is var 'mixed' an array? ${Array.isArray(mixed)}`);
// let obj = {} // object literal

