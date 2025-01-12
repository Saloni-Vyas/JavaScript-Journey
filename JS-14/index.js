
// Regular Functions and this

// this in a Method
const obj = {
    name: "Alice",
    greet: function() {
      console.log(`Hello, ${this.name}`); // 'this' refers to obj
    }
  };
  obj.greet(); // Output: Hello, Alice

// this in a Regular Function (Global Scope)
function showThis() {
    console.log(this);
  }
  showThis(); // In non-strict mode: Window or global object
              // In strict mode: undefined

// this in a Regular Function (Method Call)
const objs = {
    name: "Bob",
    greet: function() {
      function innerFunction() {
        console.log(this); // 'this' refers to the global object or undefined in strict mode
      }
      innerFunction();
    }
  };
  objs.greet();
  
// Arrow Function Inherits this
const object = {
  name: "Charlie",
  greet: function() {
    const arrowFunction = () => {
      console.log(`Hello, ${this.name}`); // 'this' refers to obj
    };
    arrowFunction();
  }
};
object.greet(); // Output: Hello, Charlie

//  Arrow Function in a Callback
const Obj = {
  name: "Daisy",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // 'this' refers to obj
    }, 1000);
  }
};
Obj.greet(); // Output after 1 second: Hello, Daisy


