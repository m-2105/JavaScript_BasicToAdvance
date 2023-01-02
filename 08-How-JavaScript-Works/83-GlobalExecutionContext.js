// Topic 83: Global Execution Context
// Whenever the JavaScript engine receives a script file, 
// it first creates a default Execution Context known as the Global Execution Context (GEC).
// 1. Global Memory or Creation Phase
// 2. Global Code Execution
// ReferenceLink : https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/

// How javascript code executes
// step 1: compilation
// Compilation Phase 
// 1. Tokenizing / Lexing
// 2. Parsing --> Abstract Syntax Tree [AST]
// 3. Code Generation
// why compilation
// Early Error Checking
// Determine appropriate scope for variables

// step 2: code execution
// In javascript code executes inside execution context 

console.log(myFunction); // will return function because it is defined in function
console.log(fullName); // will return undefined because it is just declared in global memory, not defined or initialize
console.log(typeof fullName);

//function declaration
function myFunction() {
    console.log('this is my function')
}

var firsName = 'Muqaddas';
var lastName = 'Farooq';
var fullName = firstName + ' ' + lastName;
// let and const are created in global memory but are uninitialized
// hence throw an uncaught reference error
// let fullName = firstName + ' ' + lastName;
// const fullName = firstName + ' ' + lastName;
//TDZ - Temporal Dead Zone 
    // variables/properties that are created but not initialized are 
    // considered to be in a temporal dead zone
console.log(fullName)