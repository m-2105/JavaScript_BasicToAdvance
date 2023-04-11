// correct way to link JS file

// Question
// Should I always put my JavaScript file in the head tag of my HTML file so that the code is loaded at the start?
// Answer:
// You shouldn't do that. If you place your JS file in the head tag,
// it won't load the remaining content (body tag) until it finishes 
// the script files. Also makes to execute the script even before DOM is ready. 
// Even though it can be avoided, don't do that. If your files are asynchronous,
// they can be placed even in the head tag. 
// So include your script files after the body tag

// Browser Behavior if we link JS File in head tag
// 1. HTML Parse (till the script tag, doesn't parse the remaining content until script loading finishes)
// 2. JS Load
// 3. JS Execute (can through error if any item html element is used which is not yet parsed)
// 4. HTML Parse (remaining content)

// Browser Behavior if we link JS File right before closing body tag
// 1. HTML Parse
// 2. JS Load
// 3. JS Execute

// Browser Behavior if we link JS File in head tag with a property 'async'
// 1. HTML Parse
// 2. JS Load + HTML Parse Simultaneously (parsing stops if JS File Loading is done)
// 3. JS Execute (can through error as HTML is not fully parsed)
// <script src="./asyncAndDefer.js" async></script>

// Browser Behavior if we link JS File in head tag with a property 'defer'
// 1. HTML Parse and JS Load Simultaneously
// 2. JS Execute (can through error as HTML is not fully parsed)
// <script src="./asyncAndDefer.js" defer></script>

console.log(window.document);  // window.document === document
console.dir(window.document); // print javascript representation