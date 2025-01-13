// ACCESSING 

// BY ID
const element = document.getElementById('myId');
console.log(element);

// BY CLASS NAME
const elements = document.getElementsByClassName('myClass');
console.log(elements); // HTMLCollection

// BY TAG NAME
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // HTMLCollection

// BY CSS SELECTOR
const firstDiv = document.querySelector('.myClass');
console.log(firstDiv);



// MANIPULATING THE DOM

// CHANGE CONTENT
const elementS = document.getElementById('myId');
elementS.innerHTML = 'New Content'; // Changes HTML content
elementS.textContent = 'Text Only'; // Changes text content

// CHANGE ATTRIBUTE
const img = document.querySelector('img');
img.setAttribute('src', 'newImage.jpg'); // Sets the src attribute
console.log(img.getAttribute('alt')); // Gets the alt attribute
img.alt = 'New Alt Text'; // Directly updates the alt attribute

// CHANGE STYLE 
const elementSS = document.getElementById('myId');
elementSS.style.color = 'blue';
elementSS.style.fontSize = '20px';

// ADD / REMOVE CLASSES
const Element = document.querySelector('.myClass');
Element.classList.add('newClass'); // Adds a class
Element.classList.remove('myClass'); // Removes a class
Element.classList.toggle('hidden'); // Toggles a class

// ADD REMOVE ELEMENT 
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
document.body.appendChild(newDiv); // Appends to the body

const ElementS = document.getElementById('myId');
element.remove(); // Removes the element



// EVENT HANDLING IN DOM 

// USE ADDEVENTLISTNER
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Button clicked!');
});

// Inline Events (Not Recommended):
<button onclick="alert('Clicked!')">Click Me</button>


// TRAVERSING THE DOM

// PARENT AND CHILD RELATIONSHIP 
const parent = document.getElementById('child').parentNode;
const children = document.getElementById('parent').children;

// SIBLING RELATIONSHIP
const nextSibling = document.getElementById('myId').nextSibling;
const prevSibling = document.getElementById('myId').previousSibling;

// FIRST AND LAST CHILD
const firstChild = document.getElementById('parent').firstChild;
const lastChild = document.getElementById('parent').lastChild;
