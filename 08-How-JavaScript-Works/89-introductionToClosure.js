// Topic 89: Introduction to Closures

// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an
// outer function's scope from an inner function.

function OuterFunction() {
    function InnerFunction() {
        console.log('Hello World');
    }
    return InnerFunction; 
}

const ans = OuterFunction(); 
ans();