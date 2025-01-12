
function first() {
    console.log("Inside first");
    second();
  }
  
  function second() {
    console.log("Inside second");
  }
  
  console.log("Global Start");
  first();
  console.log("Global End");

// Call Stack Sequence :
// Global Execution Context is created.
// first() is called → Function Execution Context for first is created.
// second() is called → Function Execution Context for second is created.
// second() completes → Its context is popped off the stack.
// first() completes → Its context is popped off the stack.
// Global Execution Context completes. 
  