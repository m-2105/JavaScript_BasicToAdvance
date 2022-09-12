// Topic 21: Clone Array 
// array1 and array2 are pointing same heap address 
let array1 = ['item1', 'item2'];
console.log("array1", array1);
let array2 = array1;
console.log("array2", array2);
console.log("Is array1 equals to array2?", array1 === array2);

// array1 and array3 are pointing different heap address 
let array3 = ['item1', 'item2'];
console.log("array3", array3);
console.log("Is array1 equals to array3?", array1 === array3);

// cloning array with slice method
let array4 = array1.slice(0); // performance wise faster 
console.log("array4", array4);
console.log("Is array1 equals to array4?", array1 === array4);

// array concatenation
let array5 = [].concat(array1);
console.log("array5", array5);
console.log("Is array1 equals to array5?", array1 === array5);

//clone using spread operator
let array6 = [...array1];
console.log("array6", array6);
console.log("Is array1 equals to array6?", array1 === array6);

// cloning and concatenating at once
let oneMoreArray = ['item4', 'item5'];
let array7 = [...array1, 'item3', ...oneMoreArray];
console.log("array7", array7);

let array8 = [].concat(array1, 'item3', 'item4');
console.log("array8", array8);

let array9 = array1.slice(0).concat(['item3', 'item4', 'item5']);
console.log("array9", array9);