// Create Array
let fruit = ["apple", "banana", "cherry"];
let numbers = new Array(3); // Creates an empty array with 3 slots
let moreNumbers = new Array(1, 2, 3); // [1, 2, 3]
let emptyArray = [];

// Access :

// By index
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"

// Accessing the Length
console.log(fruits.length); // 3

// Accessing Last Element
console.log(fruits[fruits.length - 1]); // "cherry"

// Modifying Arrays :

// Change Elements
fruits[1] = "blueberry"; // Changes "banana" to "blueberry"

// Add Elements:
// At the End:
fruits.push("date"); // ["apple", "blueberry", "cherry", "date"]
// At the Beginning:
fruits.unshift("apricot"); // ["apricot", "apple", "blueberry", "cherry"]

//Remove Elements:
// From the End 
fruits.pop(); // Removes "date"
// From the Beginning
fruits.shift(); // Removes "apricot"

// Delete Specific Index:
delete fruits[1]; // Leaves "undefined" at index 1

//  Array Iteration
// Using a for Loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Using for...of
for (let fruit of fruits) {
    console.log(fruit);
}
// Using forEach
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Finding Elements:
console.log(fruits.indexOf("banana")); // 1

// Transforming Arrays
// Map
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // ["APPLE", "BANANA", "CHERRY"]
// Filter
let filtered = fruits.filter(fruit => fruit.startsWith("b"));
console.log(filtered); // ["banana"]

// Sorting:
// sort()
let number = [3, 1, 4, 2];
number.sort(); // [1, 2, 3, 4]
// Custom Sorting
numbers.sort((a, b) => b - a); // Descending order

// Searching
let found = fruits.find(fruit => fruit.startsWith("c"));
console.log(found); // "cherry"

// Combining and Slicing
// concat()
let veggies = ["carrot", "spinach"];
let food = fruits.concat(veggies);
console.log(food); // ["apple", "banana", "cherry", "carrot", "spinach"]

// slice()
let subset = fruits.slice(1, 3);
console.log(subset); // ["banana", "cherry"]

// splice()
fruits.splice(1, 1, "blueberry"); // Replaces "banana" with "blueberry"
console.log(fruits); // ["apple", "blueberry", "cherry"]

//  Multi-Dimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // 6

// Array like Object
let arrayLike = { 0: "a", 1: "b", length: 2 };
let actualArray = Array.from(arrayLike);
console.log(actualArray); // ["a", "b"]
let args = [...arrayLike];
console.log(args); // ["a", "b"]

// Mixed
let mixed = [1, "two", true, { key: "value" }, [5, 6]];

// Reference Types
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]

