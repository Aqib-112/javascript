
//------------------ DOM ( Document Object Model) ----------------------//
// DOM  is a programming interface that allows us to interact with HTML and XML documents. It represents a document as a tree structure, where each node in the tree is an object that corresponds to a part of the document. JavaScript uses the DOM to read, modify, or delete elements on the page.

// ------------------- Key Points -------------------------//

// ->  The DOM is an object-oriented representation of the HTML structure.
// ->  Nodes: Each part of the document (like elements, text, or attributes) is represented as a node in the DOM.
// -> Tree Structure: The DOM has a tree-like structure where each element is a branch, and each piece of content or element is a node on that branch.

// Example
/*
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

----------------DOM structure------------------

Document
 └── html
     ├── head
     │   └── title
     └── body
         ├── h1
         └── p
*/


//------------------ Accessing Elements in the DOM---------------//

// document.getElementById("id"): Selects an element by its ID.

const header = document.getElementById("header");

// document.getElementsByClassName("class"): Selects elements by their class name and returns a collection.

const items = document.getElementsByClassName("item");

// document.getElementsByTagName("tag"): Selects elements by their tag name (like div, p, etc.)

const paragraphs = document.getElementsByTagName("p");

// document.querySelector("selector"): Selects the first element that matches a CSS selector (e.g., #id, .class, tag).

const mainDiv = document.querySelector("#main");

// document.querySelectorAll("selector"): Selects all elements that match a CSS selector.

const divs = document.querySelectorAll("div");



//------------------------Modifying the DOM--------------------------------//

// Changing Text
// textContent: Sets or returns the text content of an element.

header.textContent = "Welcome to the Page!";

// Changing HTML
// innerHTML: Sets or returns the HTML inside an element

mainDiv.innerHTML = "<p>New paragraph!</p>";

// Changing Attributes
// setAttribute and getAttribute: Add or read attributes from an element.

header.setAttribute("class", "newClass");
const className = header.getAttribute("class");

// Changing Styles

header.style.color = "blue";
header.style.fontSize = "24px";



//---------------- Creating and Inserting New Elements----------------------//

// document.createElement("tag"): Creates a new element.

const newDiv = document.createElement("div");

// Adding text content:

newDiv.textContent = "This is a new div!";

// by just creating and adding content it does not show on document body i.e html body ,for this we have to Add it to DOM.

// Adding the element to the DOM:

document.body.appendChild(newDiv); 


//----------------Removing Elements----------------------//

//We can remove elements with the removeChild method.

const parent = document.querySelector("#parentElement");
const child = document.querySelector("#childElement");
parent.removeChild(child);


//  We can directly remove an element

child.remove();










