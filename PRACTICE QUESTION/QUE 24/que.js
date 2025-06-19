// Swap two numbers without a temp variable

let a = 5, b = 10;
a = a + b;
b = a - b;
a = a - b;

console.log(a, b);  // 10 5
