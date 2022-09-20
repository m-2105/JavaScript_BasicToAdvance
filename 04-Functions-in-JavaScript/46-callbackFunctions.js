// Topic 46: Callback Function

const person = {
    firstName: 'Muqaddas',
    lastName: 'Farooq',
    age: 22,
    gender: 'female'
}

// Parameter destructuring method
const userDetails = ({ firstName, lastName, age, gender}) => {
    console.log('First Name: ', firstName);
    console.log('Last Name: ', lastName);
    console.log('Age: ', age);
    console.log('Gender', gender);
}

const personInfo = (callback) => {
    console.log('This is user information');
    callback(person);
}

personInfo(userDetails);