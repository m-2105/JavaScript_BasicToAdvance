// Topic 72: What is Prototype

// __proto__ or [[prototype]] are same things -> __proto__ is reference
// [[prototype]] != prototype -> prototype is object
function hello() {
    console.log(hello);
}

// JavaScript functions can be treated as object
// JavaScript function => function + object

console.log(hello.name); // prints the name of function hello

// You can add your own property in functions
hello.myOwnProperty = "xyz";

console.log(hello.myOwnProperty);
console.log(typeof (hello));

// name property -> tells function name
// function provides some useful properties 

// functions also give us free space i.e. empty object {} and we call that object 'prototype'
// hello.prototype;
console.log(hello.prototype); // {} constructor

// only functions provide prototype properties
const list = [1, 2, 3, 'four'];
const obj = { key1: 'Value1' };

if (hello.prototype) {
    console.log('prototype is present in function');
} else {
    console.log('prototype is not present in function');
}

if (list.prototype) {
    console.log('prototype is present in list');
} else {
    console.log('prototype is not present in list');
}

if (obj.prototype) {
    console.log('prototype is present in obj');
} else {
    console.log('prototype is not present in obj');
}
hello.prototype.abc = 'abc';
hello.prototype.xyz = 'xyz';
hello.prototype.sing = () => {
    return 'any song';
};
console.log(hello.prototype);