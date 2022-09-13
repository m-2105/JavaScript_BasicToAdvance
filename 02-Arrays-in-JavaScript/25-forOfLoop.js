// Topic 25: For of Loop 
// For in loop iterates over values

const fruits = ['apple', 'mango', 'banana'];
const fruits2 = [];

for(let fruit of fruits) {
    console.log(fruit.toUpperCase());
    fruits2.push(fruit); // adds new items to the end of an array
}

console.log(fruits2);