// Topic 08: Comparison Operator 

let num1 = 5;
let num2 = "5";

// greater than (>) -> checked for value only, not value type
console.log(`${num1} is greater than ${num2} : `, num1 > num2)

// less than (<) -> checked for value only, not value type
console.log(`${num1} is less than ${num2} :`, num1 < num2)

// greater than equals to (>=) -> checked for value only, not value type
console.log(`${num1} is greater than equals to ${num2} :`, num1 >= num2)

// less than equals to (<=) -> checked for value only, not value type
console.log(`${num1} is less than equals to ${num2} :`, num1 <= num2)

// not equals to (!=) -> checked for value only, not value type
console.log(`${num1} is not equals to ${num2} without datatype:`, num1 != num2)

// not equals to (!==) -> checked for both value and value type
console.log(`${num1} is not equals to ${num2} with datatype:`, num1 !== num2)

// equals to (==) -> checked for value only, not value type
console.log(`${num1} is equals to ${num2} without datatype:`, num1 == num2)

// equals to (===) -> checked for both value and value type
console.log(`${num1} is equals to ${num2} with datatype:`, num1 === num2)