// Functions with Objects as Parameters

// Access Object Properties
function displayUser(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
  }
  
  const user = { name: "Alice", age: 25 };
  displayUser(user); // Output: Name: Alice, Age: 25

  
// Modify an Object
function updateUser(user) {
    user.age += 1; // Increment age by 1
  }
  
  const using = { name: "Bob", age: 30 };
  updateUser(using);
  console.log(using); // Output: { name: "Bob", age: 31 }

// Destructuring Object Parameters
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  const usesr = { name: "Charlie", age: 28 };
  displayUser(users); // Output: Name: Charlie, Age: 28

// Functions with Arrays as Parameters

// Access Array Elements
function displayFruits(fruits) {
    console.log(`First fruit: ${fruits[0]}, Second fruit: ${fruits[1]}`);
  }
  
  const fruit = ["Apple", "Banana", "Cherry"];
  displayFruits(fruit); // Output: First fruit: Apple, Second fruit: Banana

// Modify an Array
function addFruit(fruits, newFruit) {
    fruits.push(newFruit); // Add a new fruit to the array
  }
  
  const fruit_s = ["Apple", "Banana"];
  addFruit(fruit_s, "Cherry");
  console.log(fruit_s); // Output: ["Apple", "Banana", "Cherry"]

// Destructuring Array Parameters
function displayFruits([first, second]) {
    console.log(`First fruit: ${first}, Second fruit: ${second}`);
  }
  
  const fruits = ["Mango", "Orange", "Pineapple"];
  displayFruits(fruits); // Output: First fruit: Mango, Second fruit: Orange


// Combining Objects and Arrays

// Array of Objects
function displayUsers(users) {
    users.forEach(({ name, age }) => {
      console.log(`Name: ${name}, Age: ${age}`);
    });
  }
  
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
  ];
  displayUsers(users);
  // Output:
  // Name: Alice, Age: 25
  // Name: Bob, Age: 30
  // Name: Charlie, Age: 28

// Object Containing Arrays
function displayInfo({ name, hobbies }) {
    console.log(`Name: ${name}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
  }
  
  const person = {
    name: "Eve",
    hobbies: ["Reading", "Cycling", "Gaming"],
  };
  displayInfo(person);
  // Output:
  // Name: Eve
  // Hobbies: Reading, Cycling, Gaming

