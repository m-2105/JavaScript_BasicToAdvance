// Topic 78: Class Practice and Extend Keyword 
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }
}

class Dog extends Animal{
   
}

const catty = new Animal('catty', 2)
console.log(catty);
console.log(catty.eat())
console.log(catty.isSuperCute())

const doggie = new Dog('Ms Doggie', 1)
console.log(doggie);
console.log(doggie.eat())
console.log(doggie.isSuperCute())