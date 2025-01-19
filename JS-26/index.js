// Global Content
console.log(this); // In a browser, this logs the Window object


// Function Content
// Regular Content
function showThis() {
    console.log(this);
  }
  showThis(); // Logs the global object; undefined in strict mode
  

// Object Function
const obj = {
    name: 'Alice',
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    },
  };
  obj.greet(); // Logs: Hello, I'm Alice
  
// Event Handler
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // Logs the button element
  });

// Arrow Function
const object = {
    name: 'Alice',
    greet: () => {
      console.log(`Hello, I'm ${this.name}`);
    },
  };
  object.greet(); // Logs: Hello, I'm undefined
  
// Call Method -
function greet(city, country) {
    console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
  }
  
  const person = {
    name: 'Alice',
  };
  
  greet.call(person, 'Paris', 'France'); // Logs: Hello, I'm Alice from Paris, France
  
// In this example, the greet function is not a method of the person object. However, by using call(), we can invoke greet as if it were a method of person, setting this to person and passing additional arguments for city and country.

