// Topic 100: Select multiple elements and iterate through them

// get multiple elements using getElements by Class name //returns array like object (use index and can iterate)
console.log('Iterate HTML Collection');
var allContainers = document.getElementsByClassName('container'); // returns HTML collection
console.log(allContainers);
console.log("is Array:", Array.isArray(allContainers));
//  Simple for Loop to iterate
console.log('Iterate HTML Collection with Simple for Loop');
console.log('No of Containers', allContainers.length);
for (let i = 0; i < allContainers.length; i++) {
    console.log(i, allContainers[i]);
}
// for of Loop to iterate
console.log('Iterate HTML Collection with for of Loop');
let j = 0;
for (let container of allContainers) {
    console.log(j++, container);
}
// forEach loop to iterate
// we can't use forEach loop to iterate over a HTML Collection
console.log('Iterate HTML Collection with ForEach Loop');
allContainers = Array.from(allContainers); //convert html collection to an array
console.log("is Array:", Array.isArray(allContainers));
allContainers.forEach((container, index) => {
    console.log(index, container);
})

// get multiple elements using querySelectorAll
console.log('\n\n Iterate NodeList');
const allLinks = document.querySelectorAll("a"); // returns all anchor tag in form of NodeList
console.log(allLinks);
console.log("is Array:", Array.isArray(allLinks))
//  Simple for Loop to iterate
console.log('Iterate NodeList with Simple for Loop');
console.log('No of Links', allLinks.length);
for (let i = 0; i < allLinks.length; i++) {
    console.log(i, allLinks[i])
}
// for of Loop to iterate
console.log('Iterate NodeList with for of Loop');
let i = 0;
for (let link of allLinks) {
    console.log(i++, link);
}
// forEach loop to iterate
console.log('Iterate NodeList with ForEach Loop');
allLinks.forEach((link, index) => {
    console.log(index, link);
})
