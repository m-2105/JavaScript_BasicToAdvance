// Topic 82: Getter and Setter
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // static Methods
    // A static method has two main purposes:
    /*1. For utility or helper methods that don't require any object state. 
         Since there is no need to access instance variables, having static 
         methods eliminates the need for the caller to instantiate the object 
         just to call the method.*/
    /*2. For the state that is shared by all instances of the class, like a counter.
         All instance must share the same state.
         Methods that merely use that state should be static as well.*/
    static classInfo() {
        return 'This is static method'
    }

    get fullName() { // by using 'get' keyword we can call the function as a property                                                      
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        //fullName.split(" ")
        // [Muqaddas, Farooq]
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat() {
        return `${this.firstName} is eating`;
    }
    isSuperCute() {
        return this.age <= 1;
    }
}

const person1 = new Person('Alwara', 'Farid', 8)
console.log(person1.fullName)
console.log(person1.eat());
console.log(Person.classInfo());