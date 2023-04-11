// Topic 98: Change Styles Of Element Using JS

const mainHeading = document.querySelector("div.headline h2")
console.log(mainHeading);
console.log(mainHeading.style);
mainHeading.style.color = "yellow";
// mainHeading.style.background-color = "black"; // through a syntax error as JS accepts  for object property 
mainHeading.style.backgroundColor = "darkgreen";
mainHeading.style.padding = "0.5rem"
mainHeading.style.border = "2px solid white"
