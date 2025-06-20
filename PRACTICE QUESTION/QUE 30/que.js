// Check if a number is a perfect square

function isPerfectSquare(num) {
  return Number.isInteger(Math.sqrt(num));
}

console.log(isPerfectSquare(16));  // true
console.log(isPerfectSquare(20));  // false
