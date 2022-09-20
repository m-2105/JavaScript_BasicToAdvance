// Topic 43: Default Parameter

// old method
function addTwo(a, b) {
    if (typeof b === 'undefined') {
        b = 1;
    }
    return a + b;
}

// new method
function addTwoNumbers(a, b=0) {
    return a + b;
}

console.log(addTwo(5,7));
console.log(addTwo(5));
console.log(addTwoNumbers(5,7));
console.log(addTwoNumbers(7));