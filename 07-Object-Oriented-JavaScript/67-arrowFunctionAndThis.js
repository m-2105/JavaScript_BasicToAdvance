// Topic 67: Arrow function and this

// Unlike regular functions, arrow functions do not have their own this . 
// The value of this inside an arrow function remains the same throughout 
// the lifecycle of the function and is always bound to the value of this 
// in the closest non-arrow parent function.

const person1 = {
    firstName: 'Muqaddas',
    age: 2,
    about: () => {
        console.log(this.firstName, this.age)
    }
}

person1.about.call(person1); // returns undefined
