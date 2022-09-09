// Topic 09: If else Statement 
let age = 14;
if (age > 18) {
    console.log("User can play games");
} else {
    console.log("User can not play games");
}

let number = 68;

if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}

//Nested If-else
let winningNumber = 19;
let yourGuess = +prompt("Guess a number"); // displays a prompt message to get user input
console.log(typeof yourGuess, yourGuess) // returns string if we do not add + before prompt

if (yourGuess == winningNumber) {
    console.log("Your guess is right!!");
} else {
    if (yourGuess < winningNumber) {
        console.log("Your guess is low");
    } else {
        if (yourGuess > winningNumber) {
            console.log("Your guess is high");
        } else {
            console.log("something went wrong")
        }
    }
}

//else-if 
let tempInDegree = 37;

if(tempInDegree < 0){
    console.log("Extremely cold outside")
}else if(tempInDegree < 16){
    console.log("Cold outside")
}else if(tempInDegree < 25){
    console.log("Weather is okay")
}else if(tempInDegree < 35){
    console.log("let's go for swim")
}else if(tempInDegree < 45){
    console.log("turn on AC")
}else {
    console.log("Too hot!!")
}