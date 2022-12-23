// Topic 76: More About Prototypes
let numbers = [1, 2, 3]
console.log(Array.prototype);
console.log(Object.getPrototypeOf(numbers))

function hello() {
    console.log('Hello World')
}

hello();
console.log(Object.prototype);
console.log(Array.prototype);