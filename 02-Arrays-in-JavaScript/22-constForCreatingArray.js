// Topic 22: const For Creating Array

// Create an array using const
// const fruits3 
const fruits3 = ["apple", "mango"];
// we can add new item to fruits3 as it does not hold element itself, 
// it holds the heap memory address where the elements of array are stored i.e. 0x11
fruits3.push("banana");
// heap memory ["apple", "mango"] 0x11 -> heap memory ["apple", "mango", "banana"] 0x11
console.log(fruits3);
// fruits3 = ["grapes", "pineapple"] //can't modify const itself