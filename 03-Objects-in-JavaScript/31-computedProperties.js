// Topic 31: Computed Properties

const key1 = 'ObjKey1';
const key2 = 'ObjKey2';

const value1 = 'ObjValue1';
const value2 = 'ObjValue2';

// method 1: ❌
const obj1 = {
    key1: value1, // key1 is by default considered as string
    key2: value2
};
console.log(obj1)

// method 2:
const obj2 = {};  // object literal 
obj2[key1] = value1; 
obj2[key2] = value2;
console.log(obj2)

// method 3: Using Computed Properties
const obj3 = {
    [key1]: value1, // [] denotes computed properties
    [key2]: value2
};
console.log(obj3)