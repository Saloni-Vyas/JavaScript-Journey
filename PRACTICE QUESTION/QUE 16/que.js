// Find the longest word in a sentence

function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(findLongestWord("I am learning JavaScript"));
// "JavaScript"
