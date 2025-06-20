// Reverse an integer

function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

console.log(reverseInt(123));   // 321
console.log(reverseInt(-456));  // -654
