// Remove falsy values from an array

let arr = [0, "Hello", false, null, 42, "", undefined, NaN];
let truthyArr = arr.filter(Boolean);

console.log(truthyArr);  // ["Hello", 42]
