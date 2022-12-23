// Topic 75: hasOwn Property

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

console.log(user1)
for(let key in user1){
    //console.log(key)
    // The own property means that the property is defined directly on the object
    // The hasOwnProperty() method returns true if the specified property is a 
    // direct property of the object — even if the value is null or undefined.
    if(user1.hasOwnProperty(key)){ 
        console.log(key)
    }
    
}