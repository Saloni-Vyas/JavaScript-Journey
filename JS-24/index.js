// CONSTRUCTOR IN JAVASCRIPT - 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
  }
  
  const person1 = new Person('Alice', 30);
  person1.greet(); // Output: Hello, my name is Alice and I'm 30 years old.

// ES6 CLASS-
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Rex');
  dog.speak(); // Output: Rex barks.
  