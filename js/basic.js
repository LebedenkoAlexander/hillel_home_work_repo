"use strict";

//#region main
const operandsAction = requestActionFromUser(
  "Please enter action you want to do: +, -, /, *.\r\nIf any troubless with the input we will request you again."
);

const operandsArray = requestOperands(
  "Please enter operands separated by ','. Example: 4, 10, -15\r\nIf any troubless with the input we will request you again."
);
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
    isNullOrEmptyString(requestResult) ||
    !/^[\/\+\-\*]+$/.test(requestResult)
  );
  return requestResult;
}

function requestOperands(title) {
  let userReply;
  let operandsArray = null;
  while (operandsArray === null) {
    userReply = prompt(title);
    if (!isNullOrEmptyString(userReply)) {
      operandsArray = convertToNumberArray(userReply);
    }
  }
  return operandsArray;
}

function convertToNumberArray(arrayString) {
  let resultArray = arrayString.split(",");
  for (let i = 0; i < resultArray.length; i++) {
    if (isNaN(resultArray[i])) return null;
    else {
      resultArray.splice(i, 1, +resultArray[i]);
    }
  }
  return resultArray;
}

function isNullOrEmptyString(requestResult) {
  return requestResult === null || requestResult.trim() === "";
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
