'use strict';

let firstOperandResult = requestOperand("Please enter first operand. If any troubless with the input we will request you again.");
firstOperandResult = Number(firstOperandResult);
let secondOperandResult = requestOperand("Please enter second operand. If any troubless with the input we will request you again.");
secondOperandResult = Number(secondOperandResult);
const operandsAction = requestActionFromUser("Please enter action you want to do: +, -, /, *. If any troubless with the input we will request you again.");

const operandsActionResult = doMath(firstOperandResult, secondOperandResult, operandsAction);
const operandsActionResultLine = returnActionResultLine(firstOperandResult, secondOperandResult, operandsAction, operandsActionResult);
alert(operandsActionResultLine);


function requestActionFromUser (title) {
    let requestResult;
    do
    {
        requestResult = prompt(title);
    } while (requestResult === null || requestResult === '' || !/^[\/\+\-\*]+$/.test(requestResult))
    return requestResult;
}

function requestOperand (title) {
    let requestResult;
    do
    {
        requestResult = prompt(title);
    } while (requestResult === null || requestResult === '' || isNaN(+requestResult))
    return requestResult;
}

function doMath (firstOperand, secondOperand, mathAction)
{
    let actionResult = null;
    switch(mathAction){
        case '+': actionResult = firstOperand + secondOperand; break;
        case '-': actionResult = firstOperand - secondOperand; break;
        case '/': actionResult = firstOperand / secondOperand; break;
        case '*': actionResult = firstOperand * secondOperand; break;
    }
    return actionResult;
}

function returnActionResultLine (firstOperand, secondOperand, mathAction, mathResult)
{
    return(`${firstOperand} ${mathAction} ${secondOperand} = ${mathResult}`);
}