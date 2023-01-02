// Topic 87: Function Execution Context

let foo = 'foo';
console.log(foo);
function getFullName(firstName, lastName) {
    console.log(arguments); // array like object i.e. has length property and index
    let myVar = 'var inside func';
    console.log(myVar);
    const fullName = firstName + lastName;
    return fullName;
}

const personName = getFullName('Muqaddas', 'Farooq');
console.log(personName)