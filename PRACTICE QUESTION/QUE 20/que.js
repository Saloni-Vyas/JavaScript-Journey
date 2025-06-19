// Merge two arrays without duplicates

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

let merged = [...new Set([...arr1, ...arr2])];

console.log(merged);  // [1, 2, 3, 4, 5]
