// Count occurrences of each character in a string

function charCount(str) {
  let count = {};

  for (let char of str) {
    count[char] = count[char] ? count[char] + 1 : 1;
  }

  return count;
}

console.log(charCount("hello"));
// { h: 1, e: 1, l: 2, o: 1 }
