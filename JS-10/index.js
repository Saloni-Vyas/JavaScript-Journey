// Basic syntax
const user = {
    name: "John Doe",
    age: 30,
    country: "USA"
  };
  
  // Destructure properties into variables
  const { name, age } = user;
  
  console.log(name); // Output: "John Doe"
  console.log(age);  // Output: 30

// Renaming Variables
// You can rename the variables during destructuring.
const USER = {
    name: "John Doe",
    age: 30
  };
  
  const { name: fullName, age: userAge } = USER;
  
  console.log(fullName); // Output: "John Doe"
  console.log(userAge);  // Output: 30

// Default Value
// If a property doesn’t exist in the object, you can assign a default value.
const User = {
    name: "Jane Doe"
  };
  
  const { names, ages = 25 } = user;
  
  console.log(names); // Output: "Jane Doe"
  console.log(ages);  // Output: 25

//  Nested Object Destructuring
// You can destructure nested objects.
const usering = {
    name: "Alice",
    address: {
      city: "New York",
      zip: "10001"
    }
  };
  
  const { address: { city, zip } } = usering;
  
  console.log(city); // Output: "New York"
  console.log(zip);  // Output: "10001"

  
// Function Parameters with Destructuring
// You can destructure objects directly in function parameters.
function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  }
  
  const users = { name: "Bob", age: 40 };
  greet(users); // Output: "Hello, Bob. You are 40 years old."
  