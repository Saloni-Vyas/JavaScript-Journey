// Reverse each word in a sentence

function reverseWords(sentence) {
  return sentence.split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords("Hello World"));  
// "olleH dlroW"
