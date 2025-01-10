// BASIC SYNTAX 
function functionName(parameters) {
    // code to execute
    return value; // optional
  }

// Function with a Single Parameter
function add(a, b) {
    return a + b;
  }
  console.log(add(3, 5)); // Output: 8

// Default Parameter
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  greet(); // Output: Hello, Guest!

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 4)); // Output: 8

