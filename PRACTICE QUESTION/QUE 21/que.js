// Find the largest word in a string

function largestWord(sentence) {
  let words = sentence.split(" ");
  let largest = "";

  for (let word of words) {
    if (word.length > largest.length) {
      largest = word;
    }
  }
  return largest;
}

console.log(largestWord("JavaScript is amazing"));
// "JavaScript"
