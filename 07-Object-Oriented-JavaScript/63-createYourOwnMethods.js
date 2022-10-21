// Topic 63: Create Your Own Method
//Methods => Function inside Object

function personInfo() {
    console.log(`Person name is ${this.firstName} and age is ${this.age}`)
}

const person1 = {
    firstName: 'Muqaddas',
    age: 22,
    about: personInfo
}

const person2 = {
    firstName: 'Tooba',
    age: 25,
    about: personInfo
}

const person3 = {
    firstName: 'Alwara',
    age: 23,
    about: personInfo
}

person1.about();
person2.about();
person3.about();
