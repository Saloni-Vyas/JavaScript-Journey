// Object

// Object Literal
let person = {
    name: "John",
    age: 30,
    isMarried: false
};

// Using new Keyword 
let obj = new Object();
obj.name = "John";
obj.age = 30;

// Using Construct Function
void function Person (name, age) {
    this.name = name;
    this.age = age;
}
let persons = new Person("John", 30);

// Using Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person01 = new Person("John", 30);

// Accesing 

// Dot Notation
console.log(person.name); // "John"
// Bracket Notation
console.log(person["age"]); // 30


// Adding and updating Properties
person.gender = "male"; // Adds new property
person.age = 35;        // Updates existing property


// Deleting
delete person.isMarried;
console.log(person); // { name: "John", age: 35, gender: "male" }

// Using in Operator
console.log("name" in person); // true

// Using hasOwnProperty():
console.log(person.hasOwnProperty("age")); // true

// Using for...in:
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Using Object.keys():
let keys = Object.keys(person); // ["name", "age", "gender"]

// Using Object.values():
let values = Object.values(person); // ["John", 35, "male"]

// Using Object.entries():
let entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 35], ["gender", "male"]]

// Methods in Objects
let person = {
    name: "John",
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
person.greet(); // "Hello, my name is John."

// Nested Object
let user = {
    id: 1,
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    }
};
console.log(user.address.city); // "New York"

// Object shorthand and destructing 
let names = "John", ages = 30;
let person = { name, age }; // { name: "John", age: 30 }

let { name, age } = person;
console.log(name, age); // "John", 30