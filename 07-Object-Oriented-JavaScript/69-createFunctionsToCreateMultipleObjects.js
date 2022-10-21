// Topic 69: Create Function to create multiple objects

// How does this Function work?
// 1. Create object
// 2. Add key-value pair
// 3. Return object

function CreateUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `${this.firstName} is ${this.age} years old.`
    };
    user.is18 = function () {
        return this.age >= 18;
    };
    return user;
}

const user1 = CreateUser('Muqaddas', 'Farooq', 'muqaddas@sudofy.com', 22, 'House Number, Colony, pincode, state');
console.log(user1);
console.log(user1.is18());
console.log(user1.about());