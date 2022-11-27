
function add(...args) {
    secondSavedNumValue = args[1];
    const array = Array.from(args);
   return array.reduce((total, newNum) => total + newNum, 0);
}; //function for addition

function subtract(...args) {
    secondSavedNumValue = args[1]; // this is used as a separate value later in the function.
    const array = Array.from(args);
    return array.reduce((total, newNum) => total - newNum);
}; //function for subtract

function multiply(...args) {
    secondSavedNumValue = args[1];
    const array = Array.from(args);
    return array.reduce((total, newNum) => total * newNum)
   
   };// function for multiplication

   function divide(...args) {
    secondSavedNumValue = args[1];
    const array = Array.from(args);
    return array.reduce((total, newNum) => total / newNum)
   
   };

function operate() {

    secondSavedNum = firstInput.innerText;
    const firstNum = savedNum;
    const secondNum = secondSavedNum;

    /*  Continue from here, figure out where to store these values in ordered to be displayed and manipulated */
    const operands = ["*","+","-","/"];
    const operandPrompt = operandSelection;
    displayText.innerText = `${savedNum} ${operandSelection} ${secondSavedNumValue} = `

    if (operandPrompt  == operands[0]) {
        return multiply(firstNum, secondNum)
    } else if (operandPrompt == operands[1]) {
        return add(firstNum, secondNum)
    } else if (operandPrompt == operands[2]) {
        return subtract(firstNum, secondNum);
} else if (operandPrompt == operands[3]) {
    return divide(firstNum, secondNum);
};



}

let operandSelection = "";
let firstInputValue; 
let savedNum;
let secondSavedNum;
let secondSavedNumValue;
const clear = document.querySelector("#Clear")
const del = document.querySelector("#Del"); // delete button
const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven"); //variable for seven button
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const firstInput = document.querySelector("#first-input"); // variable for display text where answers are to be displayed

const division = document.querySelector("#division");
const equal = document.querySelector("#equal")
const displayText  = document.querySelector("#display-text");


equal.addEventListener("click", () => {
const result = operate();

firstInput.innerText = result;
})


clear.addEventListener("click", () => {
   firstInput.innerText = "";
   displayText.innerText = "";
})

del.addEventListener("click", () => {
    const arrayOfInput = Array.from(firstInput.innerText);
    arrayOfInput.pop();
    firstInput.innerText = arrayOfInput.join("");
 
 })

;

division.addEventListener("click", (e) => {
   operandSelection = e.target.innerText; // this selects the division symbol 
   savedNum = firstInput.innerText; // this stores the input that was originally entered in 

   firstInput.innerText = ""; // this clears the original input display
   displayText.innerText = savedNum + " " + operandSelection; // This moves the data that was on the first display to the second display\
    
  // const result = operate();
    //console.log(result);

})

equal.addEventListener("click", operate);

zero.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText); // adds the inne text from the associated 

one.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);

two.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);

three.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);

four.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);

five.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);

six.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);

seven.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);

eight.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);


nine.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);


