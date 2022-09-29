// Topic 56: Fill Method

//fill() method changes all elements in an array to a static value,
// from a start index (default 0 ) to an end index (default array. length ). 

const myArray1 = new Array(10).fill(1);
console.log(myArray1);

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Before fill()', myArray2);
myArray2.fill(0,2,5) // value, startIndex, endIndex
console.log('After fill()', myArray2); // returns the modified array.