// Check if a number is an Armstrong Number

function isArmstrong(num) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

console.log(isArmstrong(153));  // true
console.log(isArmstrong(123));  // false
