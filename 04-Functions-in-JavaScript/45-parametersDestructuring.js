// Topic 45: Parameters Destructuring

// mostly used in objects and react

const person = {
    firstName: 'Muqaddas',
    lastName: 'Farooq',
    age: 22,
    gender: 'female'
}

// Simple method
const printDetails = (obj) => {
    console.log('First Name: ', obj.firstName);
    console.log('Last Name: ', obj.lastName);
    console.log('Status', obj.status)
}

printDetails(person)

// Parameter destructuring method
const userDetails = ({ age, gender, hobbies }) => {
    console.log('Age: ', age);
    console.log('Gender', gender);
    console.log('Hobbies', hobbies);
}

userDetails(person)