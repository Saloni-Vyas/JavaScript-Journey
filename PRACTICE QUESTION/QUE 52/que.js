// Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let maxLength = 0, i = 0, j = 0;

  while (i < s.length && j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      maxLength = Math.max(maxLength, j - i);
    } else {
      set.delete(s[i++]);
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));  // 3
