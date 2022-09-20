// Topic 30: Iterate Objects

const person = {
    name: "Muqaddas",
    age: 22,
    hobbies: ['listening music', 'cooking', 'sleeping'], // array inside object
    student: true
};

// iterate using for in loop
for (let key in person) {
   // console.log(`${key} : ${person[key]}`);
    console.log(key, ':', person[key]);
}

// iterate using Objects.keys -> returns array
console.log(Object.keys(person));
console.log(typeof Object.keys(person));
console.log(Array.isArray(Object.keys(person)));

for (let key of Object.keys(person)) {
    // console.log(`${key} : ${person[key]}`);
     console.log(key, ':', person[key]);
 }