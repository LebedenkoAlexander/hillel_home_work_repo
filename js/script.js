"use strict";

//#region data
const bodyListElem = document.getElementById("body-list");
const bodyInputElem = document.getElementById("body__input");
const bodyInputLabelElem = document.getElementById("body__input-label");
const bodyButtonElem = document.getElementById("body__button");
bodyButtonElem.addEventListener("click", addListEntryFromInput);
//#endregion

//#region main
function addListEntryFromInput() {
  const inputFieldValue = getInputFieldValue();
  if (inputFieldValue === null) {
    showInputFieldValodationError("Input field is empty. Please input any value.");
  }
  else {
    createPopulateAndAddListElement(inputFieldValue);
    clearFieldsValues();
  }
}
//#endregion

//#region functions
function getInputFieldValue() {
  return inputIsInvalid(bodyInputElem.value) ? null : bodyInputElem.value;
}

function inputIsInvalid(value)
{
  return value === "";
}

function showInputFieldValodationError(message) {
  bodyInputLabelElem.textContent = message;
}

function createPopulateAndAddListElement(inputFieldValue) {
  let listElem = document.createElement("li");
  listElem.textContent = inputFieldValue;
  listElem.addEventListener("click", () =>
    listElem.classList.contains("body-list__item-green")
      ? listElem.classList.remove("body-list__item-green")
      : listElem.classList.add("body-list__item-green")
  );
  bodyListElem.append(listElem);
}

function clearFieldsValues() {
  bodyInputLabelElem.textContent = '';
  bodyInputElem.value = '';
}
//#endregion
