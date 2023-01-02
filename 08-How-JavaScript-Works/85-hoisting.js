// Topic 85: hoisting
console.log(myFunctionDeclaration);

// function declaration
function myFunctionDeclaration(){
    console.log('this is my function Declaration');
}  

//Print Function
console.log(myFunctionExpressionWithVar);

// function expression with var
var myFunctionExpressionWithVar = function(){
    console.log('this is my function Expression with var');
}
