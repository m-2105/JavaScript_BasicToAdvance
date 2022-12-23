// Topic 73: Use Prototype
function CreateUser(firstName, lastName, email, age, address) {
    //const user = Object.create(userMethods);
    const user = Object.create(CreateUser.prototype); 
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
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

const user1 = CreateUser('Muqaddas', 'Farooq', 'muqaddas@sudofy.com', 22, 'House Number, Colony, pincode, state');
const user2 = CreateUser('Alwara', 'Farid', 'alwara@sudofy.com', 26, 'House Number, Colony, pincode, state');
const user3 = CreateUser('Tooba', 'Iftikhar', 'tooba@sudofy.com', 24, 'House Number, Colony, pincode, state');

console.log(user1);
console.log(user2.about());
console.log(CreateUser.prototype.is18.call(user3));