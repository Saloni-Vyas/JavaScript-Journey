// Comparison of data type

// Stict Equality 
console.log(5 === "5"); // false (number !== string)
console.log(null === undefined); // false
console.log(NaN === NaN); // false (special case)

// Loose Equality
console.log(5 == "5"); // true (string "5" coerced to number 5)
console.log(null == undefined); // true
console.log(0 == false); // true (0 coerced to false)

