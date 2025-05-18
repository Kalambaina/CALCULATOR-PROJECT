let display = document.getElementById('display');
let currentInput = '';
let resetNext = false;

function appendNumber(num) {
  if (resetNext) {
    currentInput = '';
    resetNext = false;
  }
  if (num === '.' && currentInput.endsWith('.')) return;
  currentInput += num;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;
  if (['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += operator;
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
    resetNext = true;
  } catch {
    currentInput = 'Error';
    updateDisplay();
    resetNext = true;
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}
