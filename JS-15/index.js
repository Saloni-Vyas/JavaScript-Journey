// Basic Syntax
(function() {
    // Code to execute immediately
  })();

// Using an Arrow Function (ES6+)
(() => {
    // Code to execute immediately
  })();




// SOME EXAMPLE - 
// 1. Basic Syntax
(function() {
    console.log("IIFE executed!");
  })(); 
  // Output: IIFE executed!

// 2.IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
  })("Alice");
  // Output: Hello, Alice!

//  IIFE to Create a Private Scope
(function() {
    let privateVar = "I am private";
    console.log(privateVar); // Accessible inside the IIFE
  })();
  
  console.log(privateVar); // Error: privateVar is not defined

// Using an Arrow Function
(() => {
    console.log("Arrow function IIFE executed!");
  })();
  // Output: Arrow function IIFE executed!
  
