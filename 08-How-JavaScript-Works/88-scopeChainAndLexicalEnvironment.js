// Topic 88: Scope Chain and Lexical Environment

const lastName = 'Farooq';

const printName = function(){
    const firstName = 'Muqaddas';
    function myFunc(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunc()
}

printName();

// A lexical environment is a data structure that holds identifier-variable mapping. 
// (here identifier refers to the name of variables/functions, and 
// the variable is the reference to actual object 
// [including function object or primitive value]). 
// Lexical in general means in hierarchy or in a sequence.

// Scope is the language agnostic concept, to refer to the visibility of variables 
// or functions to the executing code. 
// In js a variable or function is visible to the executing code, 
// if it is there in the current lexical environment or in the lexical
// environment-chain of the enclosing function. 
// In case of global code, the chain does not exist.