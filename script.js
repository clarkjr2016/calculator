function add(...args) {
  let array = Array.from(args); // convert arguments from function input into an array
  let result = array.reduce((a, b) => a + b); // using the reduce method to add all the inputs together
  return result;
} // basic addition function

function subtract(...args) {
  let array = Array.from(args); // convert arguments from function input into an array
  let result = array.reduce((a, b) => a - b); // using the reduce method to subtract all the inputs
  return result;
} // basic subraction function

function multiply(...args) {
  let array = Array.from(args); // convert arguments from function input into an array
  let result = array.reduce((a, b) => a * b); // using the reduce method to multiply all the inputs together
  return result;
}

function divide(...args) {
  let array = Array.from(args); // convert arguments from function input into an array
  let result = array.reduce((a, b) => a / b); // using the reduce method to divide all the inputs
  return result;
} // basic division function

let firstInput; // variable for first input
let operator; // variable for operator that is selected
let secondInput; // variable for second input

function operate(firstInput, secondInput, operator) {
  let operatorArray = ["+", "-", "*", "/"]; // creating an array so that user has ability to select what operator they will want to use.
  let returnValue;
  if (operator == operatorArray[0]) {
    returnValue = add(firstInput, secondInput); // returns the result of the first and second input being placed into the add function
  } else if (operator == operatorArray[1]) {
    returnValue = subtract(firstInput, secondInput); // returns the result of the first and second input being placed into the subtract function
  } else if (operator == operatorArray[2]) {
    returnValue = multiply(firstInput, secondInput); // returns the result of the first and second input being placed into the multiply function
  } else if (operator == operatorArray[3]) {
    returnValue = divide(firstInput, secondInput); // returns the result of the first and second input being placed into the divide function
  }

  return returnValue;
} // returns the result of the first and second input being placed into the desired operator function
