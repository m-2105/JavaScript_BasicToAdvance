// Topic 29: Dot vs Bracket Notation

// Dot notation:
// 1. Property identifies can only be alphanumeric (and _ and $)
// 2. Property identifiers cannot start with a number.
// 3. Property identifiers cannot contain variables.
// 4. obj.prop_1, obj.prop$ ✔
// 5. obj.1prop, obj.prop name ❌

// Bracket notation:
// 1. Property identifiers have to be a String or a variable that references a String.
// 2. It is okay to use variables, spaces, and Strings that start with numbers
// 3. obj["1prop"], obj["prop name"] ✔

const person = {
    name: "Muqaddas",
    age: 22,
    hobbies: ['listening music', 'cooking', 'sleeping'], // array inside object
    student: true,
    'current mood': 'happy'
};

// scenario 1: Key with spaces
// console.log(person.current mood); // unable to read after spaces
console.log(person['current mood'])

// scenario 1: Key with spaces
let key = 'email';
// person.key = 'muqaddasfarooq@gmail.com' // does not add 'email' as key -> key : 'muqaddasfarooq@gmail.com' 
// person["key"] = 'muqaddasfarooq@gmail.com' // does not add 'email' as key -> key : 'muqaddasfarooq@gmail.com' 
person[key] = 'muqaddasfarooq@gmail.com' // does not add 'email' as key -> key : 'muqaddasfarooq@gmail.com' 
console.log(person)
