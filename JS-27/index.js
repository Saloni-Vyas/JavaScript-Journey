// DEFINING A CONSTRUCTOR IN A CLASS
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
}
// In this example, the Person class has a constructor that accepts name and age parameters, which are then assigned to the instance being created.

// CREATING INSTANCE 
const person1 = new Person('Alice', 30);
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 30




// EXAMPLE -
class Employee extends Person {
    constructor(name, age, position) {
      super(name, age);
      this.position = position;
    }
  }
  