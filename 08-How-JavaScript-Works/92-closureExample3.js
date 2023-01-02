// Topic 92: Closure Example 3

// function calculatePower(power) {
//     return function (base) {
//         return base ** power;
//     }
// }

// short code
const calculatePower = power => base => base ** power;

const square = calculatePower(2);
const squaredAns = square(3);
console.log('square of 3 is', squaredAns)

const cube = calculatePower(3);
const cubedAns = cube(3);
console.log('cube of 3 is', cubedAns)