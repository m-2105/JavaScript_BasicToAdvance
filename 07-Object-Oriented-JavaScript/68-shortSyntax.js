// Topic 68: Short Syntax

// alternative for arrow function and this
const user1 = {
    firstName: 'Muqaddas',
    age: 2,
    about(){
        console.log(this.firstName, this.age)
    }
}

user1.about.call(user1);