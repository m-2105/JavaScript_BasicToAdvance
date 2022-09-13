// Topic 28: Introduction to Objects

// Object ->Reference type
// Arrays are good but not sufficient for real world data
// Objects store key-value pairs, objects does not have index

// create objects
const person = {
    name: "Muqaddas",
    age: 22,
    hobbies: ['listening music', 'cooking', 'sleeping'], // array inside object
    student: true
};
console.log(typeof person, person);

// access data from objects
console.log(person.name);
console.log(person['age']); // Type of key is string by default
console.log(person.hobbies);
console.log("Is person.hobbies an array?",Array.isArray(person.hobbies));

// add key-value pairs to objects
person.gender = 'female';
person['Profession'] = "Software Quality Assurance Engineer"
console.log(typeof person, person);