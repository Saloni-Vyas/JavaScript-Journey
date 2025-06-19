// Capitalize the first letter of each word in a string

function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalized.join(" ");
}

console.log(capitalizeWords("hello world from javascript"));
// "Hello World From Javascript"
