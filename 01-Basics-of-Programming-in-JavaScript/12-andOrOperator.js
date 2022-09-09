// Topic 12: AND OR Operator
// AND OR Operators are used to check multiple conditions at once
let num1 = 18;
let num2 = 10;

// AND Operator -> Returns true if all conditions are true, else false
if ((num1 === 10) && (num2 === 10)) {
    console.log("Both numbers are equal to 10");
} else {
    console.log("Both numbers are not equal to 10");
}

// OR Operator -> Returns false if all conditions are false, else true
if ((num1 === 10) || (num2 === 10)) {
    console.log("Either one or both numbers are equal to 10");
} else {
    console.log("Both numbers are not equal to 10");
}