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

console.log(operate(5,2,"-"));