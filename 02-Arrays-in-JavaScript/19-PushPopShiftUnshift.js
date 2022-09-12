// Topic 19: Push Pop Shift Unshift

// array push -> add new item at end 
let evenNumber = [2, 4, 6, 8, 10];
evenNumber.push(12);
console.log(evenNumber);
// array pop -> removes the last element from an array and returns that element
let poppedNumber = evenNumber.pop();
console.log(poppedNumber);
console.log(evenNumber);

// array unshift -> add new item at start
evenNumber.unshift(0);
console.log(evenNumber);
// array shift -> removes the first element from an array and returns that element
let shiftedNumber = evenNumber.shift();
console.log(shiftedNumber);
console.log(evenNumber);

// Key Note : push and pop are faster than shift and unshift
