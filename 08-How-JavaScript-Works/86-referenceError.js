// Topic 86: Reference Error
// Print
// console.log(myFunctionExpressionWithLet); // Cannot access 'myFunctionExpressionWithLet' before initialization
// console.log(myFunctionExpressionWithConst); // Cannot access 'myFunctionExpressionWithLet' before initialization

// function expression with let
let myFunctionExpressionWithLet = function () {
    console.log('this is my function Expression with let');
}

// function expression with const
const myFunctionExpressionWithConst = function () {
    console.log('this is my function Expression with const');
}


// Example
// console.log('Hello World');
// let firstName = 'Muqaddas';
// let lastName = 'Farooq';

// const myFunc = function () {
//     let var1 = 'First Variable';
//     let var2 = 'Second Variable';
//     console.log(var1);
//     console.log(var2);
// }

