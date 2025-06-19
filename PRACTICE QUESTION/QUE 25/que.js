//  Find the missing number in a sequence

function findMissing(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((a, b) => a + b, 0);
  return sum - actualSum;
}

console.log(findMissing([1, 2, 4, 5, 6]));  // 3
