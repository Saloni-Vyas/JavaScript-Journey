//  Remove duplicates from an array without using Set

function removeDuplicates(arr) {
  let unique = [];

  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));  // [1, 2, 3, 4]
