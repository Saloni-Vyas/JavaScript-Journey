// HIGHER ORDER ARRRAY LOOP -

// FOREACH -
array.forEach((element, index, array) => {
    // Your logic here
  });

// MAP
const newArray = array.map((element, index, array) => {
    return element * 2;
  });

// FILTER
const filteredArray = array.filter((element, index, array) => {
    return element > 2;
  });

// REDUCE
const result = array.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
  }, initialValue);

//  FIND
const found = array.find((element, index, array) => {
    return element > 2;
  });

// FINDINDEX
const numbers = [1, 2, 3, 4];
const index = numbers.findIndex(num => num > 2);
console.log(index);
// Output: 2

// SOME
const numbers = [1, 2, 3, 4];
const hasGreaterThanThree = numbers.some(num => num > 3);
console.log(hasGreaterThanThree);
// Output: true

// EVERY
const number = [1, 2, 3, 4];
const allPositive = number.every(num => num > 0);
console.log(allPositive);
// Output: true

// SORT
const numbers = [4, 2, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);
// Output: [1, 2, 3, 4]

// FLATMAP
const nested = [1, 2, 3];
const resultS = nested.flatMap(num => [num, num * 2]);
console.log(resultS);
// Output: [1, 2, 2, 4, 3, 6]

