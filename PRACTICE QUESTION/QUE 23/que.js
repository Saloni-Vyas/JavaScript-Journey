// Check if two strings are anagrams

function isAnagram(str1, str2) {
  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');
  return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("hello", "world"));    // false
