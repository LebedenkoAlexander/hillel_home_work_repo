"use strict";

//#region main
const operandsAction = requestActionFromUser(
  "Please enter action you want to do: +, -, /, *.\r\nIf any troubless with the input we will request you again."
);
const actionsCount = requestActionsCount(
  "Please specify how much times you want do the requested action.\r\nImportant! 1 or more is expected.\r\nIf any troubless with the input we will request you again."
);
const operandsArray = requestOperands(actionsCount);
const resultOfActionsForOperands = doMath(operandsAction, operandsArray);
const operandsActionResultLine = returnActionResultLine(
  operandsAction,
  operandsArray,
  resultOfActionsForOperands
);
alert(operandsActionResultLine);
//#endregion

//#region Functions
function requestActionFromUser(title) {
  let requestResult;
  do {
    requestResult = prompt(title);
  } while (
    requestResult === null ||
    requestResult === "" ||
    !/^[\/\+\-\*]+$/.test(requestResult)
  );
  return requestResult;
}

function requestActionsCount(title) {
  let requestResult;
  do {
    requestResult = prompt(title);
  } while (
    requestResult === null ||
    requestResult === "" ||
    isNaN(+requestResult) ||
    +requestResult <= 0
  );
  return +requestResult;
}

function requestOperands(operandsAmount) {
  let operandsArray = [];
  let requestResult;
  for (let i = 0; i <= operandsAmount; i++) {
    do {
      requestResult = prompt(`Please enter operand № ${i + 1}`);
    } while (
      requestResult === null ||
      requestResult === "" ||
      isNaN(+requestResult)
    );
    operandsArray.push(+requestResult);
  }
  return operandsArray;
}

function doMath(mathAction, operandsArray) {
  let actionResult = operandsArray[0];
  for (let i = 1; i < operandsArray.length; i++) {
    switch (mathAction) {
      case "+":
        actionResult += operandsArray[i];
        break;
      case "-":
        actionResult -= operandsArray[i];
        break;
      case "/":
        actionResult /= operandsArray[i];
        break;
      case "*":
        actionResult *= operandsArray[i];
        break;
    }
  }
  return actionResult;
}

function returnActionResultLine(action, operandsArray, actionsResult) {
  let resultedLine = `(${operandsArray[0]})`;
  for (let i = 1; i < operandsArray.length; i++) {
    resultedLine += ` ${action} (${operandsArray[i]})`;
  }
  resultedLine += ` = ${actionsResult}`;
  return resultedLine;
}
//#endregion
