// Topic 59: Sets

// Sets are iterables
// Sets only have its own methods
// No index-based access
// Order is not guaranteed
// unique items only no duplicates allowed

const mySet = new Set([1, 2, 3]);
mySet.add(1);
mySet.add('item', 3);
mySet.add(['ice-cream', 'chocolates', 'wafers'])
console.log(mySet);


if (mySet.has(10)) {
    console.log('10 is present');
} else {
    console.log('10 is not present');
}

for (let element of mySet) {
    console.log(element);
}

//Extract unique elements from an array
const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
console.log(myArray);

// TASK -> Find Length of Set 'uniqueElements'
console.log(uniqueElements.length); // returns undefined as it has no index-based access

let length = 0;
for(let element of uniqueElements){
    length ++;
}

console.log("Length of Set uniqueElements' is", length);