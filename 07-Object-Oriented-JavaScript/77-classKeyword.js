// Topic 77: Class Keyword

//  ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
//  JavaScript Classes are templates for JavaScript Objects.
//  Classes are fake in javascript - they work same as object but 
//  You will feel as if they execute in the same manner as Java or Python

// Use the keyword class to create a class.
class CreateUser {
    //Always add a method named constructor() to create an object
    constructor(firstName, lastName, email, age, address) {
        console.log('Constructor Called')
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    // functions inside object / class are called methods
    about() {
        return `${this.firstName} is ${this.age} years old.`
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return 'Sing your favorite Song'
    }
    hobby(hobby) {
        return `${hobby} is ${this.firstName}'s Hobby`;
    }
}

// Class constructor 'CreateUser' cannot be invoked without 'new'
const user1 = new CreateUser('Muqaddas', 'Farooq', 'muqaddas@sudofy.com', 22, 'House Number, Colony, pincode, state');
const user2 = new CreateUser('Alwara', 'Farid', 'alwara@sudofy.com', 26, 'House Number, Colony, pincode, state');
const user3 = new CreateUser('Tooba', 'Iftikhar', 'tooba@sudofy.com', 24, 'House Number, Colony, pincode, state');

console.log(user1, typeof (user1));

console.log(user2.about());
console.log(CreateUser.prototype);
console.log(CreateUser.prototype.is18.call(user3));

console.log(user2.hobby('Reading'));
console.log(CreateUser.prototype.hobby.call(user3, 'Gaming'))

// To Check Prototype of object
// console.log(user1.prototype); // returns undefined 
console.log(Object.getPrototypeOf(user1))
