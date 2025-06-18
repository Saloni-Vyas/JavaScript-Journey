//  5. Find First Non-Repeating Character 

function firstUniqueChar(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) return char;
  }
  return null;
}

console.log(firstUniqueChar("aabbcdd")); // Output: "c"
