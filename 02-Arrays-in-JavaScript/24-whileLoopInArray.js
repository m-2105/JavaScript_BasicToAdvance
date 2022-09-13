// Topic 24: While loop in Array 

const fruits = ['apple', 'mango', 'banana'];
const fruits2 = [];
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i]); // adds new items to the end of an array
    i++;
}

console.log(fruits2);