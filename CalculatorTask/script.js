
// Function to append numbers or operators to the display
function appendToDisplay(value) {
  if(value == '%'){
    display.value +='/100'
  }else{
    display.value += value;
  }
  
  }

  // square root
  function appendAdvancedOperation(operation) {
    if (operation === 'sqrt') {
      display.value = `Math.sqrt(${display.value})`;
    }
  }
  
 // Clear the display
    function clearDisplay() {
      display.value = '';
    }
  
  // Function to calculate the result
  function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
      // Evaluate the expression
      document.getElementById('display').value = eval(expression);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
// Enable keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '%', '(', ')', '^'].includes(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'c' || key === 'C') {
    clearDisplay();
  } else if (key === 's') { // Shortcut for square root
    appendAdvancedOperation('sqrt');
  }
});