"use strict"; // treat all JS code as newer version


// Primitive Data Types
// These are immutable and represent a single value.

// number => 2 to power 53
let a = 42;
let b = 3.14;

// bigint
let bigIntValue = 9007199254740991n; // BigInt

// string => " "
let name = "Alice";
let greeting = `Hello, ${name}!`; // Template literal


// boolean => true/false
let isActive = true;
let isLoggedIn = false;


// null => standalone value
let y = null;
console.log(y); 

// undefined =>
let x;
console.log(x); 

// symbol symbol ==> > unique
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2);

// Object Types
// Objects are mutable and used to store collections of data or more complex entities.

// object
let person = {
    name: "Alice",
    age: 25
};

// Array
let numbers = [1, 2, 3, 4];

// Function
function greet() {
    console.log("Hello!");
}

// Data
let today = new Date();
console.log(today);

// To Determine the type of a value
console.log(typeof( ));

console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (a quirk in JavaScript)
console.log(typeof {}); // "object"
console.log(typeof Symbol()); // "symbol"
console.log(typeof function(){}); // "function"

// Type Conversion -

// Implicit (Type Coercion):
console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3 (string converted to number)

// Explicit:
let num = Number("42"); // Convert string to number
let str = String(42);   // Convert number to string
let bool = Boolean(1);  // Convert number to boolean