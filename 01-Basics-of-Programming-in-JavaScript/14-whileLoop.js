// Topic 14: While loop
//coding Principle : dry -> Don't Repeat Yourself

//Print 0-9
let i = 0;
while (i <= 9) {
    console.log(i);
    i++;
}
console.log(`Current value of i is ${i}`);

//Add numbers starting from 1 to 10 using while loop
let num = 10;
let currentPoint = 0
let sum = 0;

while (currentPoint <= 10) {
    sum += currentPoint;
    currentPoint++;
}
console.log(`Sum of ${num} numbers using while loop is ${sum}`);

//Alternative -> this method is faster than while loop asa it takes constant time whereas while loop takes linear timeu;
let total = (num * (num + 1) / 2);
console.log(`Total of ${num} numbers using alternative method is ${total}`);
