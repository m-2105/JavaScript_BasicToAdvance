// Topic 60: Map

// object literal
const myInfo = {
    firstName: 'Muqaddas',
    age: 22,
    1: 'one' // 1 is also considered as string
}
console.log('Name :', myInfo.firstName);
console.log('Age :', myInfo["age"]);

for (let key in myInfo) {
    console.log(typeof key); // returns string for all keys
}

// Map
const person = new Map();
person.set('firstName', 'Muqaddas'); // store key-value pair (like object)
person.set('age', 22);
// person.set('age', 25); ❌ -> duplicate keys are not allowed like objects

//difference between maps and objects
// objects can only have string or symbol as key 
// whereas maps can have anything as key like array, number, string
person.set(1, 'one');
person.set([2, 3.4, 5], 'array');

// console.log(person.1) ❌ -> syntax error
// console.log(person['firstName']) ❌ -> returns undefined

console.log(person.get('firstName'));
console.log(person.get('age'));
console.log(person.get(1));

// map is iterable
// store data in ordered fashion
for (let [key, value] of person) {
    console.log(key, value);
};

// Example
const user1 = {
    id: 1,
    firstName: 'Muqaddas'
}

const user2 = {
    id: 2,
    firstName: 'Tooba'
}

const user3 = {
    id: 2,
    firstName: 'Ahmer '
}

const userDetails = new Map();
userDetails.set(user1, { age: 22, Gender: 'Female' });
userDetails.set(user2, { age: 25, Gender: 'Female' });
userDetails.set(user3, { age: 31, Gender: 'Male' });
console.log(userDetails.get(user2));