// Topic 101: Inner HTML

const headline = document.querySelector(".headline");
console.log(headline.innerHTML);
headline.innerHTML = "<h1>Inner HTML Changed</h1>";
console.log(headline.innerHTML);
headline.innerHTML += "<button class=\"btn btn-headline\">Learn More</button>"
// \" is equivalent to "