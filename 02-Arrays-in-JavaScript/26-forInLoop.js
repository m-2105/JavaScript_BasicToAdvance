// Topic 26: For in Loop 
// For in loop iterates over the keys

const fruits = ['apple', 'mango', 'banana'];
const fruits2 = [];

for(let index in fruits) { 
    console.log(index);
    fruits2.push(fruits[index]); // adds new items to the end of an array
}

console.log(fruits2);