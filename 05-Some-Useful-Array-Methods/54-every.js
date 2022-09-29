// Topic 54: Every

const mixedNumbers = [5, 9, 3000, 25, 750, 100];
const evenNumber = [2, 44, 36, 24, 92, 100];

const isMixedEven = mixedNumbers.every((numbers) => numbers % 2 === 0);
console.log(isMixedEven);

const isEven = evenNumber.every((numbers) => numbers % 2 === 0);
console.log(isEven);

// Example -> Check if Every product's price is less than 15000
const products = [
    { productId: 1, productName: 'Mobile', price: 72000 },
    { productId: 2, productName: 'Bottle', price: 1500 },
    { productId: 3, productName: 'Book', price: 1900 },
    { productId: 4, productName: 'Pen', price: 120 },
];

const ans = products.every((product) => product.price < 15000);
console.log("Is Every product's price less than 15000 ?", ans);