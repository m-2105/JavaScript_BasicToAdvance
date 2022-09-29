// Topic 55: Some

const numbers = [5, 9, 3001, 25, 759, 105];

const isAnyEven = numbers.some((number) => number % 2 == 0); // returns true if at least 1 number is even
console.log(isAnyEven);


// Example -> check if any product's price exceed 50000
const userCart = [
    { productId: 1, productName: 'Mobile', price: 72000 },
    { productId: 2, productName: 'Bottle', price: 1500 },
    { productId: 3, productName: 'Book', price: 1900 },
    { productId: 4, productName: 'Pen', price: 120 },
];

const ans = userCart.some((product) => product.price > 50000);
console.log(ans)