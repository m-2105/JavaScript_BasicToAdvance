// Topic 06: DataTypes 

// Primitive data types
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. bigInt
// 7. symbol

// typeof Operator
// 1.string datatype
let firstName = "Muqaddas";
console.log("Type of firstName:", typeof firstName);

// 2. number datatype
let age = 22;
console.log("Type of age:", typeof (age)); // parentheses after typeof are not required,except when you are computing within parentheses

// 3. boolean datatype
let student = true;
console.log("Type of student:", typeof student);

// 4. undefine datatype
let result;  // const can never be declared like this, you need to assign some value at time of declaration
console.log("Type of result:", typeof result); // returns undefined as variable is only declared not initialized

// 5. null datatype
let anyDisease = null;
console.log("Type of anyDisease:", typeof anyDisease); // returns object as type, it is a JavaScript error.

// 6.BigInt datatype
// The BigInt data type represent integer values larger than the range supported by the Number data type.
console.log("Maximum Number Limit", Number.MAX_SAFE_INTEGER)
let myNumber1 = BigInt(987);
let myNumber2 = 987n; // By adding n after your number, represents a bigInt datatype
console.log("Type of myNumber1:", typeof myNumber1);
console.log("Type of myNumber2:", typeof myNumber2);
let myNumber3 = 24;
// console.log(myNumber1 + myNumber3); // throws an error: you can't mix bigint with other types, use explicit conversion
console.log(myNumber1 + myNumber2);


// 7. symbol

// Convert string to number
let myStr = "34";
console.log("Type of myStr:", typeof myStr);
// Method 1
console.log("Type of myStr after conversion from string to number using method 1:", typeof Number(myStr));
// Method 2
console.log("Type of myStr after conversion from string to number using method 2:", typeof +myStr);

// Convert number to string
// Method 1
console.log("Type of age after conversion from number to string using method 1:", typeof String(age));
// Method 2 
age += " ";
console.log("Type of myStr after conversion from number to string using method 2:", typeof age);
