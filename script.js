function add(...args) {
    const array = Array.from(args);
   return array.reduce((total, newNum) => total + newNum, 0);
}; //function for addition

function subtract(...args) {
    const array = Array.from(args);
    return array.reduce((total, newNum) => total - newNum);
}; //function for subtract

function multiply(...args) {
    const array = Array.from(args);
    return array.reduce((total, newNum) => total * newNum)
   
   };// function for multiplication

   function divide(...args) {
    const array = Array.from(args);
    return array.reduce((total, newNum) => total / newNum)
   
   };

function operate(...args) {
    const firstNum = args[0];
    const secondNum = args[1];
    const operands = ["*","+","-","/"];
    const operandPrompt = args[2]

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


del.addEventListener("click", () => {
   const arrayOfInput = Array.from(firstInput.innerText);
   arrayOfInput.pop();
   firstInput.innerText = arrayOfInput.join("");

})

zero.addEventListener("click", (e) =>
firstInput.innerText += e.target.innerText);

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