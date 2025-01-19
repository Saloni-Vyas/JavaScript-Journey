function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  
  const alice = new Person('Alice');
  alice.greet(); // Output: Hello, my name is Alice.

  
//   In this example, the greet method is defined on Person.prototype, so all instances of Person share the same greet method. This approach is memory efficient because the method is not duplicated across instances.