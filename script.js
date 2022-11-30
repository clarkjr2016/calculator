
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

function operate() {

  

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

