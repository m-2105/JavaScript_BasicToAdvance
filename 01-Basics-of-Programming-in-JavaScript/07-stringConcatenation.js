// Topic 07: String Concatenation

// Simple String Concatenation
let firstName = "Muqaddas";
let lastName = "Farooq";
let fullName = firstName + " " + lastName
console.log(fullName)

// Number String Concatenation
let firstNumber = "20";
let secondNumber = "22";
// Concatenation as string
let fullString = firstNumber + secondNumber
console.log(fullString)
// Concatenating as number
let fullNumber = +firstNumber + +secondNumber // adding + sign before string to convert string to a number
console.log(fullNumber)

// using + operator Concatenation
let aboutMe = "My name is " + firstName + " " + lastName + " and I am turning " + secondNumber + " this year." 
console.log(aboutMe)

// Template String Concatenation using backticks
let myInfo = `My name is ${fullName} and I am turning ${secondNumber} this year.`
console.log(myInfo)