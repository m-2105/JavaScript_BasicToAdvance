// Topic 65: Call, Apply and Bind Method
const person1 = {
    firstName: 'Muqaddas',
    age: 2,
    about: function (hobby, favMusician) {
        console.log(this.firstName, this.age, hobby, favMusician)
    }
}

const person2 = {
    firstName: 'Alwara',
    age: 5
}

person1.about.call(person2, 'guitar', 'moazrt')
function about(hobby, favMusician) {
    console.log(`${this.firstName}'s age is ${this.age}. ${this.firstName} loves ${hobby} and her favorite Musician is ${favMusician}`)
}

const user1 = {
    firstName: 'Muqaddas',
    age: 2
}

const user2 = {
    firstName: 'Alwara',
    age: 5
}

const user3 = {
    firstName: 'Tooba',
    age: 5
}

// call method ->The call() method is a predefined JavaScript method. 
// It can be used to invoke (call) a method with an owner object as an argument (parameter). 
// With call() , an object can use a method belonging to another object.

about.call(user2, 'cooking', 'moazrt'); // here this keyword indicates user2
about.call(); // undefined (no this)
about.call(user1, 'cooking', 'bach'); // undefined (no this)

// apply method -> The apply() method is similar to the call() method
// The call() method takes arguments separately and apply() method takes arguments as an array
about.apply(user2, ['cooking', 'moazrt']);

// bind method -> returns a function
const func = about.bind(user2, 'cooking', 'moazrt');
func();

