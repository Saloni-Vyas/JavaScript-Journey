// 6. Debounce Function

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example:
const logMessage = () => console.log('Debounced!');
const debouncedLog = debounce(logMessage, 1000);

debouncedLog();
debouncedLog();
debouncedLog(); // Only this one runs after 1 second
