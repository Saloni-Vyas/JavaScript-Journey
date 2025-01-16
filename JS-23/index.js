// Example of a simple promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
  
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed.");
    }
  });
  
  // Using the promise
  myPromise
    .then((message) => {
      console.log(message); // Logs: "The operation was successful!"
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Promise settled."); // Logs regardless of success or failure
    });
  