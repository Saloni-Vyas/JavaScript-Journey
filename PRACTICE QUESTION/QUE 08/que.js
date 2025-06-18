// 8. Sum All Numbers in a Range

function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 5)); // Output: 15
