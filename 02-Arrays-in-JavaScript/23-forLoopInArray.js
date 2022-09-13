// Topic 23: For loop in Array 

const fruits = ['apple', 'mango', 'banana'];
const fruits2 = [];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i]); // adds new items to the end of an array
}

console.log(fruits2);