// Find the First Non-Repeating Character in a String

function firstUniqueChar(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstUniqueChar("leetcode"));  // 'l'
