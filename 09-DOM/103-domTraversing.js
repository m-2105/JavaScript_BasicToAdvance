// Topic 103: DOM Traversing

const h1Element = document.querySelector("h1");
console.log(h1Element);

const div = h1Element.parentElement; //h1Element.parentNode
console.log(div);
div.style.color = "#393646";
div.style.backgroundColor = "#D4FAFC";

const body = div.parentNode //h1Element.parentNode.parentNode or document.body
console.log(body);
body.style.color = "";
body.style.backgroundColor = "#569DAA";

const head = document.querySelector("head");
console.log(head);

const title = head.querySelector("title");
console.log(title);

const container = document.querySelector(".container");
console.log(container);
console.log(container.childNodes);
console.log(container.children);