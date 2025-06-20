// Find common elements between two arrays

function commonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

console.log(commonElements([1, 2, 3], [2, 3, 4]));  // [2, 3]
