// Topic 61: Object.assign

const obj = {
    key1: "value1",
    key2: "value2"
}
// copy 1 object to another directly
const obj1 = obj;

// copy 1 object to another using spread operator
const obj2 = {...obj};

// copy 1 object to another using Object.assign
const obj3 = Object.assign({}, obj);

obj.key3 = "value3";

// print all Objects
console.log(obj);
console.log(obj1);
console.log(obj2);
console.log(obj3);