// Topic 91: Closure Example 2

function hello(x) {
    const a = 'value of A';
    const b = 'value of B';
    return function () {
        console.log(a, ',', b, ',', x);
    }
} 

const ans = hello('value of X');
ans();