// Topic 53: Find

const animals = ['cat', 'dog', 'lion', 'deer', 'snake', 'crocodile'];

const isLength3 = (str) => str.length === 3; //returns true if elements length is equal to 3

console.log(isLength3('dog'))
console.log(animals.find(isLength3)) // find first occurrence of 3 letter string

// Example ->

const users = [
    { userId: 1, firstName: 'Muqaddas', age: '22' },
    { userId: 2, firstName: 'Alwara', age: '23' },
    { userId: 3, firstName: 'Tooba', age: '25' },
    { userId: 4, firstName: 'Sundus', age: '21' },
];

const user = users.find((user) => user.userId === 3);
console.log(user)