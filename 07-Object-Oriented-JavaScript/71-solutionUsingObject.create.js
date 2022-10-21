// Topic 71: Solution using Object.create

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {}
obj2.key3 = "value3";

//one more method to create an empty object
const obj3 = Object.create(obj1);
obj3.key3 = "value3";
obj3.key2 = "unique"

console.log(obj3)

// __proto__ or [[prototype]] are same things 
// [[prototype]] != prototype

console.log(obj3.__proto__)