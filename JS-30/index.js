// LEXICAL SCOPING
function outerFunction() {
    let outerVariable = 'I am outside!';
  
    function innerFunction() {
      console.log(outerVariable); // Accesses outerVariable from the outer scope
    }
  
    innerFunction();
  }
  
  outerFunction(); // Outputs: I am outside!

// CLOSURES
function createCounter() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    };
  }
  
  const counter = createCounter();
  counter(); // Outputs: 1
  counter(); // Outputs: 2
  counter(); // Outputs: 3

  