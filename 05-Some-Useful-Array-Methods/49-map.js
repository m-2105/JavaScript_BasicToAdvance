// Topic 49: Map Method
// The map method returns a new array by applying the callback function on each element of an array, 
// while the forEach method doesn't return anything.

const numbers = [2, 4, 6, 8, 10];

const myFunc = (number, index) => {
    return number * number;
}

const squaredNumbers = numbers.map(myFunc);
// console.log(`square of ${number} is ${number * number}`);
console.log(squaredNumbers);
 
const users = [
    { firstName: 'Muqaddas', age: '22' },
    { firstName: 'Alwara', age: '23' },
    { firstName: 'Tooba', age: '25' },
    { firstName: 'Sundus', age: '21' },
];

const firstNames = users.map((user) => {
    return user.firstName;
});

console.log(firstNames);