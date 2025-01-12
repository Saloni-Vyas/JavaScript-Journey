// SEQUENTIAL FLOW - 
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
// Output: Step 1, Step 2, Step 3

// CONDITIONAL STATEMENT - 

// IF 
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}

// IF-ELSE
let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("No need for an umbrella.");
}

// IF -  ELSE - IF - ELSE
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// SWITCH STATEMENT -
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday
let days = 3;

switch (days) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday

// LOOPS- 

// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
  }
  // Output: Count: 1, Count: 2, ..., Count: 5
  
// WHILE LOOP 
let count = 1;
while (count <= 3) {
  console.log(`Count: ${count}`);
  count++;
}
// Output: Count: 1, Count: 2, Count: 3

// DO-WHILE LOOP
let num = 5;
do {
  console.log(`Number: ${num}`);
  num++;
} while (num < 5);
// Output: Number: 5

// FOR...OF LOOP
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
// Output: red, green, blue

// FOR - IN LOOP
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output: name: Alice, age: 25


// ERROR HANDLING - 
// TRY - CATCH
try {
    let result = 10 / 0;
    console.log(result);
  } catch (error) {
    console.log("Error occurred:", error.message);
  }
// TRY -FINALLY
try {
    throw new Error("Something went wrong");
  } catch (error) {
    console.log("Caught an error:", error.message);
  } finally {
    console.log("This will always execute.");
  }

// JUMP STATEMENT
// BREAK 
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
  }
  // Output: 1, 2

// CONTINUE
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }
  // Output: 1, 2, 4, 5

// FUNCTION CALL - 
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greet("Alice"); // Control flows to the function and returns
  