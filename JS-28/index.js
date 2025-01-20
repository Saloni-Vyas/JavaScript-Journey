// Bind in Javascript
// function.bind(thisArg[, arg1[, arg2[, ...]]])

function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
  }
  
  const greetHello = greet.bind(null, 'Hello');
  greetHello('Alice'); // Outputs: Hello, Alice!
  

// Function Borrowing 
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  const member = {
    firstName: 'Hege',
    lastName: 'Nilsen'
  };
  
  const fullName = person.fullName.bind(member);
  console.log(fullName()); // Outputs: Hege Nilsen

// Preserving this in Asynchronous Code
  function Timer() {
    this.seconds = 0;
    setInterval(function() {
      this.seconds++;
      console.log(this.seconds);
    }.bind(this), 1000);
  }
  
  const timer = new Timer();
  // Outputs: 1, 2, 3, ...
  