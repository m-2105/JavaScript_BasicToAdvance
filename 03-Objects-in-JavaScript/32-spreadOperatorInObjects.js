// Topic 32: Spread Operator in Objects

const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4"
};

// same key values will overwrites
const newObj = { ...obj1, ...obj2 , keyExtra : "valueExtra"}; 
console.log(newObj)

// some examples
const newObj2 = {...['item1', 'item2']}
console.log(newObj2)

const newObj3 = {...'abcdefghijklmnopqrstuvwxyz'}
console.log(newObj3)