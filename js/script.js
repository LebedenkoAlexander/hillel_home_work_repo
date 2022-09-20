"use strict";

//#region data
const firstVariableControl = document.querySelector(".first-variable");
const actionControl = document.querySelector("#action-selector");
const secondVariableControl = document.querySelector(".second-variable");
const calculationButton = document.querySelector("#calculate-button");
const resultControl = document.querySelector("#result");
//#endregion

//#region main
calculationButton.addEventListener("click", showResultOfCalculation);
//#endregion

//#region functions
function showResultOfCalculation() {
  let firstVariable = firstVariableControl.value;
  let secondVariable = secondVariableControl.value;
  if (isInvalidValue(firstVariable, secondVariable)) {
    alert("Please ensure that variables fields contain value.");
  } else {
    resultControl.value = doCalculation(
      +firstVariable,
      +secondVariable,
      actionControl.value
    );
  }
}

function isInvalidValue(firstVariable, secondVariable) {
  return (
    isNullOrEmptyString(firstVariable) || isNullOrEmptyString(secondVariable)
  );
}

function isNullOrEmptyString(requestResult) {
  return requestResult === null || requestResult.trim() === "";
}

function doCalculation(firstVariable, secondVariable, action) {
  switch (action) {
    case "+":
      return firstVariable + secondVariable;
    case "-":
      return firstVariable - secondVariable;
    case "/":
      return firstVariable / secondVariable;
    case "*":
      return firstVariable * secondVariable;
  }
}
//#endregion
