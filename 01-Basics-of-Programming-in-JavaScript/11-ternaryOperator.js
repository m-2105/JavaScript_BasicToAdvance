// Topic 11: Ternary Operator / Conditional Operator

// using If condition
let age = 14;
let drink;
if (age >= 15) {
    drink = "coffee";
} else {
    drink = "milk";
}
console.log(`${age} year old can drink ${drink}`);

// using ternary Operator
age = 19
drink = age >= 18 ? "coffee" : "milk"; // Syntax variableName = condition ? trueValue : falseValue
console.log(`${age} year old can drink ${drink}`);