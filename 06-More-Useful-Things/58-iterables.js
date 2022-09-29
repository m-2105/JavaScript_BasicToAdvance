// Topic 58: Iterables

// Iterable is an object which can be looped over or iterated over with the help of a for loop. 
// Iterable objects are a generalization of arrays. 
// That’s a concept that allows us to make any object useable in a for..of loop.
// Arrays are iterable. But there are many other built-in objects, that are iterable as well.
// For instance,
// 1. lists
// 2. tuples
// 3. sets
// 4. dictionaries
// 5. string
// 6. array
// 7. object

const firstName = 'Muqaddas';

for (let char of firstName) {
    console.log(char);
}