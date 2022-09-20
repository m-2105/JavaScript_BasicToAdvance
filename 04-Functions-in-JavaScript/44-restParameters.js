// Topic 44: Rest Parameters

function myFunc(a, b, ...c) {
    // c is rest parameters, it holds all remaining elements
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log('c is', c);
}

myFunc(3, 2, 5, 6, 7, 8,);

// Example -> Add all numbers

function addAll(...numbers) {
    console.log(numbers);
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

const sumOfAll = addAll(5, 6, 7);
console.log(sumOfAll)