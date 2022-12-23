// Topic 81: Getter and Setter
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){ // by using 'get' keyword we can call the function as a property                                                      
        return `${this.firstName} ${this.lastName}`
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName ;
    // }

    set fullName(fullName){
        //fullName.split(" ")
        // [Muqaddas, Farooq]
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName ;
    }
}
// object / instance
const person1 = new Person('Muqaddas', 'Farooq', 5);
// console.log(person1.fullName()); // will throw error 'person1.fullName is not a function'
console.log(person1.fullName);

console.log(person1.firstName);
console.log(person1.lastName);

// person1.setName('Alwara', 'Farid');
// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.firstName ='Muqaddas';
// person1.lastName ='Farooq';

// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "Alwara Farid"

console.log(person1.firstName);
console.log(person1.lastName);
