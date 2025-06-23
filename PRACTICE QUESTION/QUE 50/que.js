// Move All Zeroes to the End (In-place)

function moveZeroes(arr) {
  let lastNonZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[lastNonZero], arr[i]] = [arr[i], arr[lastNonZero]];
      lastNonZero++;
    }
  }
  return arr;
}

console.log(moveZeroes([0,1,0,3,12]));  // [1,3,12,0,0]
