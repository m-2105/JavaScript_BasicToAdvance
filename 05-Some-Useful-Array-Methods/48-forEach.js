// Topic 48: For Each

const numbers = [2, 4, 6, 8, 10];

const myFunc = (number, index) => {
    console.log(`${number} is present at index ${index}`);
}
// traditional method
// for(let index in numbers){
//     myFunc(numbers[index], index)
// }

// foreach method -> traverses each element one by one
numbers.forEach(myFunc);

// Anonymous function -> function without name
numbers.forEach(function (number, index) {
    console.log(`${number * 2}${index}`);
})

// Key Point:
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.

const users = [
    { firstName: 'Muqaddas', age: '22' },
    { firstName: 'Alwara', age: '23' },
    { firstName: 'Tooba', age: '25' }
]

users.forEach((user, index) => {
    console.log(user.firstName, index);
})