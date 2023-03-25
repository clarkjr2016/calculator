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
let operationCounter = 0;

function operate(firstInputPar, secondInputPar, operatorPar) {
  firstInputPar = firstInput; //setting this parameter to the firstInput value stored after an operator was clicked
  operatorPar = operator; // setting this parameter to the operator sign that is stored after the operator is clicked
  secondInputPar = displayValue.innerText * 1;
  secondInput = secondInputPar;

  let operatorArray = ["+", "-", "*", "/"]; // creating an array so that user has ability to select what operator they will want to use.
  let returnValue;

  console.log(firstInputPar);
  console.log(secondInputPar);
  console.log(operatorPar);

  if (operatorPar == operatorArray[0]) {
    returnValue = add(firstInputPar, secondInputPar); // returns the result of the first and second input being placed into the add function
  } else if (operatorPar == operatorArray[1]) {
    returnValue = subtract(firstInputPar, secondInputPar); // returns the result of the first and second input being placed into the subtract function
  } else if (operatorPar == operatorArray[2]) {
    returnValue = multiply(firstInputPar, secondInputPar); // returns the result of the first and second input being placed into the multiply function
  } else if (operatorPar == operatorArray[3]) {
    returnValue = divide(firstInputPar, secondInputPar); // returns the result of the first and second input being placed into the divide function
  }

  displayValue.innerText = returnValue;
  displayManipulate.innerText = ""; //setting the manipulate value to empty text as well
  displayManipulate = []; // establishing the displayManipulate variable back as empty array so that it can be utilized again.
  firstInput = "";
  operationCounter = 0;
  return returnValue;
} // returns the result of the first and second input being placed into the desired operator function

const del = document.querySelector("#Del");
const ce = document.querySelector("#CE");
const clear = document.querySelector("#Clear");
const division = document.querySelector("#division");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiplication = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const equal = document.querySelector("#equal");

let displayManipulate = []; // this is where input data will be manipulated prior to being displayed
const displayValue = document.querySelector("#display-text"); // this is where the value will be displayed

zero.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

one.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

two.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

three.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

four.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

five.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

six.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

seven.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

eight.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

nine.addEventListener("click", (e) => {
  displayManipulate.push(e.target.innerText); // pushing input into displayManipulate array to be further manipulated
  let joinedArray = displayManipulate.join(""); // joining the pushed inputs together as a string so that they can be used as display text
  displayValue.innerText = joinedArray; // displaying the joined together array on the screen
});

del.addEventListener("click", (e) => {
  displayManipulate.pop(); // removing the last element from the displayManipulate array
  let joinedArray = displayManipulate.join(""); //joining the array together to make a string
  displayValue.innerText = joinedArray; // displaying the string in the displayValue varaiable
});

clear.addEventListener("click", (e) => {
  let joinedArray = displayManipulate.join(""); // storing a string version of the manipulated variable in a separate varaiable to be used later
  joinedArray = ""; // setting that string variable to a value of empty text
  displayValue.innerText = joinedArray; // displaying the empty text on the screen
  displayManipulate.innerText = ""; //setting the manipulate value to empty text as well
  displayManipulate = []; // establishing the displayManipulate variable back as empty array so that it can be utilized again.
  firstInput = "";
});

plus.addEventListener("click", (e) => {
  if (operationCounter > 0) {
    operate();
  } else {
    operationCounter += 1;
    firstInput = displayValue.innerText * 1; // setting the firstInput variable as the value of whats in the display text and then making it a number
    operator = "+"; // establishing the operator that's being selected as + so that it can be utilized in the operate function
    displayValue.innerText = ""; //setting the display value back to empty text aafter plus has been clicked
    displayManipulate = []; // establishing the displayManipulate variable back as empty array so that it can be utilized again.
  }
});

minus.addEventListener("click", (e) => {
  if (operationCounter > 0) {
    operate();
  } else {
    operationCounter += 1;
    firstInput = displayValue.innerText * 1; // setting the firstInput variable as the value of whats in the display text and then making it a number
    operator = "-"; // establishing the operator that's being selected as - so that it can be utilized in the operate function
    displayValue.innerText = ""; //setting the display value back to empty text aafter plus has been clicked
    displayManipulate = []; // establishing the displayManipulate variable back as empty array so that it can be utilized again.
  }
});

multiplication.addEventListener("click", (e) => {
  if (operationCounter > 0) {
    operate();
  } else {
    operationCounter += 1;
    firstInput = displayValue.innerText * 1; // setting the firstInput variable as the value of whats in the display text and then making it a number
    operator = "*"; // establishing the operator that's being selected as - so that it can be utilized in the operate function
    displayValue.innerText = ""; //setting the display value back to empty text aafter plus has been clicked
    displayManipulate = []; // establishing the displayManipulate variable back as empty array so that it can be utilized again.
  }
});

division.addEventListener("click", (e) => {
  if (operationCounter > 0) {
    operate();
  } else {
    operationCounter += 1;
    firstInput = displayValue.innerText * 1; // setting the firstInput variable as the value of whats in the display text and then making it a number
    operator = "+"; // establishing the operator that's being selected as - so that it can be utilized in the operate function
    displayValue.innerText = ""; //setting the display value back to empty text aafter plus has been clicked
    displayManipulate = []; // establishing the displayManipulate variable back as empty array so that it can be utilized again.
  }
});

equal.addEventListener("click", operate);
