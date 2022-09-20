// Topic 41: Lexical scope

// Lexical Environment -> a specification object which stores the 
// association of identifiers to their functions and variables.

// JavaScript uses lexical scoping to resolve the variable names
// when a function is created inside another function.

const num = 9;
const myApp = () => {
  //  const num = 3;
    function myFunc1(){
       const num = 6;
        console.log('Inside myFunc1', num);
    }
    console.log(num);
    myFunc1();
};

myApp();