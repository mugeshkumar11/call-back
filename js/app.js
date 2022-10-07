//call back function 
function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    greeting(name);
  }
  
  processUserInput(greeting);
  