// Topic 62: Optional Chaining

// The optional chaining operator ( ?. ) accesses an object's property or calls a function. 
// If the object is undefined or null, it returns undefined instead of throwing an error.
const user = {
    firstName: "Muqaddas",
    address: {
        houseNumber: '123',
        street: 'abc',
        city: 'xyz'
    },
    employee: true
};

console.log(user?.firstName); // if user exists, return first name 
console.log(user?.address?.houseNumber);
console.log(user?.employee);