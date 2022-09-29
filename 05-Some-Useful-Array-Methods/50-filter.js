// Topic 50: Filter
// The FILTER function filters an array based on a Boolean (True/False) array
// It creates a new array filled with elements that pass a test provided by a function
const numbers = [1, 4, 2, 9, 5, 8, 10];

const isEven = (number) => {
    return number % 2 === 0;
}
const isOdd = (number) => {
    return number % 2 !== 0;
}


console.log('Even numbers', numbers.filter(isEven));
console.log('Odd numbers', numbers.filter(isOdd));