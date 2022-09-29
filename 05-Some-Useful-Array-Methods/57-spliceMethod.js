// Topic 57: Splice Method
// syntax -> start index, delete count, insert

const animals = ['cat', 'dog', 'lion', 'deer', 'snake', 'crocodile'];
console.log(animals);

// delete lion
const deletedItem = animals.splice(2, 1); // returns deleted item
console.log(animals);
console.log(deletedItem);

// insert tiger at after snake
animals.splice(3, 0, 'tiger')
console.log(animals);

// delete tiger and insert lion  simultaneously 
const deletedAnimal = animals.splice(3, 1, 'lion', 'monkey');
console.log(animals);
console.log(deletedAnimal);
