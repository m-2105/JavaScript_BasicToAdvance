// Topic 38: Arrow Function

const birthdayWish = () => {
    console.log(`Happy Birthday to you`)
}

const sumTwoNumbers =(num1, num2) => {
    let sum = num1 + num2;
    //  console.log(`sum of ${num1} and ${num2} is ${sum}`);
    return sum;
}

birthdayWish();
let sum = sumTwoNumbers(5, 8);
console.log(sum);

// Function to classify even or odd number
const numberClassifier =(num) => {
    let type = num % 2 === 0 ? 'even' : 'odd'
    return type;
}
let type = numberClassifier(67);
console.log(type);

// Function to determine if the target value is present in array or not
const findTarget =(array, target) => {
    let result = false;
    for (let element of array) {
        result = element === target ? true : false
        if (result) {
            break;
        }
    }
    return result;
}

const fruits = ['apple', 'mango', 'banana', 'grapes', 'grapes'];
let targetAchieved = findTarget(fruits, 'banana');
console.log(targetAchieved);


// Function to determine if the target value is present in array or not , if present return index
const findNumber =(array, target) => {
    let targetIndex;
    for (let index in array) {
        targetIndex = array[index] === target ? index : null
        if (targetIndex) {
            break;
        }
    }
    return targetIndex;
}

const numbers = [1, 5, 8, 3, 5, 9, 2];
let targetIndex = findNumber(numbers, 7);
if (targetIndex) {
    console.log(`Target value is present at index ${targetIndex}`);
}
else {
    console.log(`Target value not found`)
}


