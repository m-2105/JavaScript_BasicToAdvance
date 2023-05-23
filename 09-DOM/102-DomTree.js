// Topic 102: DOM TREE [Javascript Object Understanding]

// 1. Document [Root Node] -> html [Root Element] [Child of Document]
// 2. html -> head, text(newLineSpace), body [Child of html]
// 3. head -> title, script [Child of head]
// 4. body -> div [Child of body]
// 5. div -> h1, p [Child of div]

// root node
const rootNode = document.getRootNode();

// child relationship
console.log(rootNode.childNodes);
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode); //javaScript object
// console.dir(htmlElementNode); //returns object representation
console.log(htmlElementNode.childNodes); // [head, text, body]
const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1]; //newline space after head element
const bodyElementNode = htmlElementNode.childNodes[2];
console.dir(headElementNode);
console.dir(textElementNode); 
console.dir(bodyElementNode);

// parent relationship
console.dir(headElementNode.parentElement);

// sibling relationship
console.log(headElementNode.nextSibling); //returns text  [head, text, body]
console.log(headElementNode.nextElementSibling); //returns body and skip text [head, text, body] 
// console.log(bodyElementNode.nextSibling); // returns error 'Cannot read the property of undefined at (reading 'nextSibling')' as there is no next element after body

