// Topic 52: Sort

// Numeric Sort -> the sort() method will produce incorrect result when sorting numbers.
const numbers = [5, 9, 3000, 25, 750, 100];
// By default, the sort() function sorts values as strings -> ['5', '9', '3000', '25', '750', '100']
// if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
console.log('numbers before sort', numbers);
numbers.sort(); // expected -> [5, 9, 25, 100, 750, 3000]
console.log('numbers after sort', numbers); // result -> [100, 25, 3000, 5, 750, 9]
// Solution:
numbers.sort((a, b) => a - b); // ascending sort (for descending sort just replace a-b with b-a)
// 100, 25 -> a-b -> 75 positive (greater than 0) -> b,a(swap) -> 25,100        
// 25, 100 -> a-b -> -75 negative (less than 0) -> a,b(no swap) -> 25,100     
console.log('numbers after sort with callback function', numbers);

//Alphabetic sort
const fruits = ['banana', 'GUAVA', 'apple', 'grapes', 'orange']
// This works well for strings ("Apple" comes before "Banana").
console.log('fruits before sort', fruits);
fruits.sort(); // expected -> ['GUAVA', 'apple', 'banana', 'grapes', 'orange']
// Capital letters comes first in ascii table
console.log('fruits after sort', fruits); // result ->  ['GUAVA','apple', 'banana', 'grapes', 'guava', 'orange']

// Example -> Sort Product a/c price -> lowToHigh, HighToLow
const products = [
    { productId: 1, productName: 'Mobile', price: 12000 },
    { productId: 2, productName: 'Bottle', price: 1500 },
    { productId: 3, productName: 'Book', price: 1900 },
    { productId: 4, productName: 'Pen', price: 120 },
];
console.log("Products",products);

const lowToHigh =products.slice(0).sort((a,b)=>a.price-b.price); // ascending sort (LowToHigh)
console.log("Price LowToHigh",lowToHigh);

const highToLow =products.slice(0).sort((a,b)=>b.price-a.price); // descending sort (LowToHigh)
console.log("Price HighToLow",highToLow);

// For Reference ASCII Table
//char : ascii value
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64
// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90
// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96
// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

