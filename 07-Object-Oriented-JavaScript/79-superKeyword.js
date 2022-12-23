// Topic 79: Super Keyword
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed} speed` 
    }
}

const doggie = new Dog('Ms Doggie', 1, '20 m/hr')
console.log(doggie);
console.log(doggie.run())