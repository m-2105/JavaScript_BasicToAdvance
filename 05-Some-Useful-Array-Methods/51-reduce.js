// Topic 51: Reduce

// The reduce() method executes a reducer function for array element. 
// It returns a single value: the function's accumulated result.

const numbers = [2, 4, 5, 8, 3, 7];

// sum of all numbers in array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(sum);

// How it works? ->   accumulator, currentValue, return
// 1st iteration  ->   2            4             6
// 2nd iteration  ->   6            5             11
// 3rd iteration  ->   11           8             19
// 4th iteration  ->   19           3             22
// 4th iteration  ->   22           7             29


const userCart = [
    { productId: 1, productName: 'Mobile', price: 12000 },
    { productId: 2, productName: 'Bottle', price: 1500 },
    { productId: 3, productName: 'Book', price: 1900 },
    { productId: 4, productName: 'Pen', price: 120 },
];

const totalPrice = userCart.reduce((totalPrice, currentProduct) => {
    return currentProduct.price + totalPrice
}, 0) // initial value of accumulator/ totalPrice is set to 0

console.log(totalPrice);