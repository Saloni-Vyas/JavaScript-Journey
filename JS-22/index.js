// Send a GET request to the API

fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (status 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then(data => {
    // Handle the API response data
    console.log(data);
  })
  .catch(error => {
    // Handle errors (network errors, or JSON parsing errors)
    console.error('There was a problem with the fetch operation:', error);
  });


 //  Example using POST request with data:              


  
// Send a POST request to the API with JSON data
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
})
  .then(response => {
    // Check if the response status is OK
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the API response data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });


    // Example of catching HTTP errors:

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error:', error);
  });

/*  Using async/await
If you prefer working with async/await, the syntax becomes cleaner, and it makes asynchronous code easier to read. */

// Example using async/await for GET request 

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data received:', data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

fetchData();