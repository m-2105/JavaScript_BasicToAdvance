// Topic 05: Strings

// String  Indexing
let firstName = "Muqaddas";
console.log(firstName);

// M  u  q  a  d  d  a  s 
// 0  1  2  3  4  5  6  7 

// Length of string (includes spaces)
console.log(firstName.length); // returns 8 
// Since index start with zero(0), Last index : length - 1
console.log(firstName[3]);  // returns 4th letter i.e. 'a'
// If last index is unknown
console.log(firstName[firstName.length-1]); // returns last letter i.e. 's'


// String methods -> These methods do not change the original string.

// 1. trim() -> The trim() method removes all leading and trailing white-space character of a string
let fullName = "   Muqaddas Farooq   ";
console.log(fullName.length); // returns 21 including spaces
console.log(fullName); 

let trimmedName = fullName.trim(); // trim() returns the trimmed name which you need to store somewhere
console.log(trimmedName.length); // returns 15 after removing whitespace from both sides of a string
console.log(trimmedName);

// 2. toUpperCase() -> The toUpperCase() method converts a string to uppercase letters.
console.log(firstName.toUpperCase());

// 3. toLowerCase() -> The toUpperCase() method converts a string to lowercase letters.
console.log(firstName.toLowerCase());

// 4. slice() -> The slice() method returns selected elements in an array, as a new array. 
console.log(trimmedName.slice(9)); // starts from 9th index to last index

// The slice() method selects from a given start, up to a (not inclusive) given end.
let slicedName = trimmedName.slice(0,8); // starts from 0th index to 7th index
console.log(slicedName);
