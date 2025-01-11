// Global Scope -
let globalVar = "I am global";

function displayGlobal() {
  console.log(globalVar); // Accessible
}

displayGlobal(); // Output: I am global
console.log(globalVar); // Output: I am global

// Local Scope -

// function scope
function myFunction() {
    let localVar = "I am local";
    console.log(localVar); // Accessible inside the function
  }
  
  myFunction();
  console.log(localVar); // Error: localVar is not defined
  
// Block scope 
if (true) {
    let blockVar = "I am block-scoped";
    console.log(blockVar); // Accessible inside the block
  }
  
  console.log(blockVar); // Error: blockVar is not defined


// Global VS Local Scope -
let myVar = "Global";

function myFunction() {
  let myVar = "Local";
  console.log(myVar); // Output: Local
}

myFunction();
console.log(myVar); // Output: Global


// Scope Chain 
let outerVar = "Outer";

function innerFunction() {
  let innerVar = "Inner";
  console.log(outerVar); // Output: Outer (found in parent scope)
  console.log(innerVar); // Output: Inner (found in local scope)
}

innerFunction();


