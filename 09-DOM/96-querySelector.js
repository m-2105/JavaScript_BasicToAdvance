// Topic 96: Query Selector

// Get element using id
const mainHeading = document.querySelector('#main-heading');
console.log(mainHeading);

// Get element using class (unique class)
const header = document.querySelector('.header');
console.log(header);

// Get element using class (multiple element)
const container = document.querySelector('.container'); // returns the very first element with the class 'container'
console.log(container);

const link = document.querySelector("a"); // returns an anchor tag
console.log(link);

// Get all element using class (multiple element)
const allContainers = document.querySelectorAll('.container'); // returns all elements with the class 'container'
console.log(allContainers);

const allLinks = document.querySelectorAll("a"); // returns all anchor tag in form of NodeList
console.log(allLinks);