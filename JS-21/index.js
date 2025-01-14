//  Asynchronous JavaScript

// Synchronous vs. Asynchronous:
console.log('Start'); // Synchronous
setTimeout(() => console.log('Async Task'), 1000); // Asynchronous
console.log('End'); // Synchronous
// OUTPUT -
// Start
// End
// Async Task

// CALLBACK
function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 1000);
}

fetchData(() => {
    console.log('Processing fetched data...');
});
// Drawbacks: Can lead to "callback hell" when callbacks are nested deeply, making code hard to read and maintain.

// PROMISES
// Creating a Promise:
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve('Promise fulfilled!');
    } else {
        reject('Promise rejected!');
    }
});

myPromise
    .then((result) => console.log(result)) // Runs if resolved
    .catch((error) => console.log(error)); // Runs if rejected
// Chaining Promises:
new Promise((resolve) => resolve(10))
    .then((num) => num * 2)
    .then((result))


// ASYNC/AWAIT
async function fetchData() {
    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully!");
            }, 2000);
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

fetchData();





//  Common Asynchronous Patterns -
// Handling Multiple Promises
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // [10, 20, 30]
    })
    .catch((error) => {
        console.error(error);
    });

//  Race Conditions