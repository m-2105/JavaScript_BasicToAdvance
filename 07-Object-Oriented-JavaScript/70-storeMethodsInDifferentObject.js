// Topic 70: Store Method in Different Object

const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old.`
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return 'Sing your favorite Song'
    }
}

function CreateUser(firstName, lastName, email, age, address) {
    //const user = Object.create(userMethods);// Set userMethods as a __proto__ property of user 
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing
    return user;
}

const user1 = CreateUser('Muqaddas', 'Farooq', 'muqaddas@sudofy.com', 22, 'House Number, Colony, pincode, state');
const user2 = CreateUser('Alwara', 'Farid', 'alwara@sudofy.com', 26, 'House Number, Colony, pincode, state');
const user3 = CreateUser('Tooba', 'Iftikhar', 'tooba@sudofy.com', 24, 'House Number, Colony, pincode, state');

console.log(user1);
console.log(user2.about());
console.log(userMethods.is18.call(user3));