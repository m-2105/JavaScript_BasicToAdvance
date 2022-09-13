// Topic 27: Array Destructuring

const myArray = ['value1', 'value2', 'value3', 'value4'];

// let var1 = myArray[0];
// let var2 = myArray[1];
// console.log('var1 contains', var1);
// console.log('var2 contains', var2);
let [var1, var2, ...myNewArray] = myArray;
let [myVar1, , myVar3] = myArray;
console.log('var1 contains', var1);
console.log('var2 contains', var2);
console.log('myVar3 contains', myVar3);
myVar1 = 'changed value'
console.log('myVar1 contains', myVar1);

console.log(myNewArray)