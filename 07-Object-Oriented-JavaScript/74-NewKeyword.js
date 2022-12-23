// Topic 74: New Keyword

function UserDetails(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}
console.log(UserDetails.prototype)
UserDetails.prototype.about = function () {
    console.log(this.firstName, this.age)
}

const user = new UserDetails('Muqaddas', 22);
// Here 'new' keyword is doing 3 things
// 1. Creating an empty object 'this' [this = {}] [{} -> empty object]
// 2. Return this[empty object]
// 3. By default 'this' keyword Set __proto__ value to prototype 
//    i.e. no need for   Object.create(CreateUser.prototype); 
console.log(user)
console.log(user.firstName);
console.log(user.age);

// Example
// Constructor Function
function CreateUser(firstName, lastName, email, age, address) {
    // const user = Object.create(userMethods);
    // const user = Object.create(CreateUser.prototype); 
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`
}
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.sing = function () {
    return 'Sing your favorite Song'
}

const user1 = new CreateUser('Muqaddas', 'Farooq', 'muqaddas@sudofy.com', 22, 'House Number, Colony, pincode, state');
const user2 = new  CreateUser('Alwara', 'Farid', 'alwara@sudofy.com', 26, 'House Number, Colony, pincode, state');
const user3 = new  CreateUser('Tooba', 'Iftikhar', 'tooba@sudofy.com', 24, 'House Number, Colony, pincode, state');

console.log(user1);
console.log(user2.about());
console.log(CreateUser.prototype.is18.call(user3));