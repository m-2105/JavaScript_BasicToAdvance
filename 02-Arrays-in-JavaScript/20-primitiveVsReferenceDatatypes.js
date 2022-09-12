// Topic 20: Primitive vs Reference Datatype

// Primitive Datatype
let num1 = 6;
let num2 = num1;

console.log(`value of num1 is ${num1}`);
console.log(`value of num2 is ${num1}`);
num1++;
console.log(`After increment num1`);
console.log(`value of num1 is ${num1}`);
console.log(`value of num2 is ${num1}`);

// Reference Datatype
let array1 = ['item1', 'item2'];
let array2 = array1;

console.log("array1", array1);
console.log("array2", array2);
array1.push('item3');
console.log(`After adding one more item tp array 1`);
console.log("array1", array1);
console.log("array2", array2);