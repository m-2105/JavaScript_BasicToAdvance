// Topic 15: For loop 

// Print 0-9

// 1. Variables initialized with let within the for loop can't be used after loop termination
// let only have scope within you for loop
// for (let i = 0; i <= 9; i++) { 
//     console.log(i);
// }
//  console.log(`Current value of i is ${i}`); //throws an error for undefined variable

// 2. Variables initialized with var within the for loop can be used after loop termination
for (var i = 0; i <= 9; i++) { 
    console.log(i);
}
console.log(`Current value of i is ${i}`);

// 3. Variables initialized with var or let before the for loop can be used after loop termination
var i = 10; // not a good practice
for (; i <= 19; i++) { 
    console.log(i);
}
console.log(`Current value of i is ${i}`);


//Add numbers starting from 1 to 10 using while loop
let num = 100;
let currentPoint;
let sum = 0;

for (currentPoint = 0; currentPoint <= 10; currentPoint++){
    sum += currentPoint;
}
console.log(`Sum of ${num} numbers using for loop is ${sum}`);

