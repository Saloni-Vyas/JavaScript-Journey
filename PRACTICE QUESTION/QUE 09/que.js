// 9. Count Vowels in a String

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowels("JavaScript")); // Output: 3


