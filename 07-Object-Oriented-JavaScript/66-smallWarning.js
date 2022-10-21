// Topic 66: Small Warning
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

// don't do this mistake
const myFunc = person1.about
myFunc() // returns undefined as we have passed reference only