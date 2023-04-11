// Topic 97: Text Content And Inner Text

// textContent gets the content of all elements, including <script> and <style> elements. 
const mainHeading = document.querySelector('#main-heading');
console.log(mainHeading.textContent);
mainHeading.textContent = "Changing TextContent";
console.log(mainHeading.textContent);

// innerText only shows "human-readable" elements. 
const todoSectionHeading = document.querySelector('#todo-section-heading');
console.log(todoSectionHeading.innerText);
todoSectionHeading.innerText = "Changing InnerText";
console.log(todoSectionHeading.innerText);