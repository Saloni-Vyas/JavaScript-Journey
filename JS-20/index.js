// Event in JavaScript

// Event Handle - 
function handleClick() {
    alert('Button clicked!');
}

// Event Listner -
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Event Object -
document.addEventListener('click', (event) => {
    console.log('Event type:', event.type);
    console.log('Clicked element:', event.target);
});



// Event Propagation -
document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default action (e.g., navigating to a link)
    alert('Link click prevented!');
});



// Some Examples -

// Button Click -
document.querySelector('button').addEventListener('click', () => {
    alert('Button was clicked!');
});


// Form Submission -
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the form from submitting
    alert('Form submission intercepted!');
});

// Mouse Hover - 
document.querySelector('div').addEventListener('mouseover', () => {
    console.log('Mouse is over the div!');
});