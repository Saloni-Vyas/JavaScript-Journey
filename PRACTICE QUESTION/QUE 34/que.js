// Sum of all even numbers in an array

function sumEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0).reduce((acc, val) => acc + val, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));  // 12
