// Topic 80: Same Method in Base Class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
    }
    
    eat(){
        return `Modified eat : ${this.name} is eating`
    }
}

const catty = new Animal('catty', 2)
console.log(catty)
console.log(catty.eat())

const doggie = new Dog('Ms Doggie', 1)
console.log(doggie);
console.log(doggie.eat())