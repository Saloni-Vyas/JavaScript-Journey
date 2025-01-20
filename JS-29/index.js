// GETTER AND SETTER IN JAVASCRIPT
class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(value) {
      if (value.length > 0) {
        this._name = value;
      } else {
        console.error('Name cannot be empty');
      }
    }
  
    // Getter for age
    get age() {
      return this._age;
    }
  
    // Setter for age
    set age(value) {
      if (value > 0) {
        this._age = value;
      } else {
        console.error('Age must be a positive number');
      }
    }
  }
  
  const person = new Person('Alice', 30);
  console.log(person.name); // Outputs: Alice
  person.age = 31; // Sets age to 31
  console.log(person.age); // Outputs: 31

//   In this example, the Person class has private properties _name and _age. The getters and setters allow controlled access to these properties, ensuring that the name is not empty and the age is a positive number.

class Counter {
    constructor() {
      this._count = 0;
    }
  
    // Getter for count
    get count() {
      return this._count;
    }
  
    // Setter for count
    set count(value) {
      this._count = value;
      this.count = value + 1; // Recursive call
    }
  }
  
  const counter = new Counter();
  counter.count = 5; // Causes stack overflow due to recursive setter call


// In this example, setting counter.count triggers the setter, which then calls the setter again, leading to infinite recursion and a stack overflow.  

