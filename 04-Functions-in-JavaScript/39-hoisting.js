// Topic 39: Hoisting 
// Hoisting -> JavaScript mechanism where variables and function 
// declarations are moved to the top of their scope before code execution.

hello();

// function hello(){ // hoisting works only with function declaration
//     console.log('hello world');
// };

const hello = function(){
    console.log('hello world');
};

 