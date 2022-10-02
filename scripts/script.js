"use strict";

//#region data
let todoListData = [];
const SAVE_BTN_NAME = "save-btn";
const DELETE_BTN_NAME = "delete-btn";
const UPDATE_BTN_NAME = "update-btn";
//#endregion

//#region setup
const toDoListRowTemplateHtml = document.getElementById(
  "todo-list__row-template"
).innerHTML;
document
  .getElementById("todo-form")
  .addEventListener("click", processToDoFormEvent);
const toDoTableRows = document.getElementById("todo-list__rows");
const inpElemList = Array.from(
  document.getElementById("todo-list__form-inputs").children
);
const firstNameInpElem = document.getElementById("from-inputs__first-name-inp");
const lastNameInpElem = document.getElementById("from-inputs__last-name-inp");
const phoneNumberInpElem = document.getElementById(
  "from-inputs__phone-number-inp"
);
const hiddenIdElem = document.getElementById("todo-form__hidden-id");
//#endregion

//#region main
function processToDoFormEvent(event) {
  switch (event.target.name) {
    case SAVE_BTN_NAME:
      if (inputsAreValid()) {
        if (isHiddenIdHasValue()) {
          updateToDoObj(
            +hiddenIdElem.value,
            firstNameInpElem.value,
            lastNameInpElem.value,
            phoneNumberInpElem.value
          );
        } else {
          addToDoObjToList(
            assembleToDoObj(
              firstNameInpElem.value,
              lastNameInpElem.value,
              phoneNumberInpElem.value
            )
          );
        }
        renderToDoList();
        resetInputsValues();
      }
      break;
    case DELETE_BTN_NAME:
      deleteToDoObj(event);
      renderToDoList();
      break;
    case UPDATE_BTN_NAME:
      updateInputFields(event);
      break;
  }
}
//#endregion

//#region functions
function assembleToDoObj(firstNameVal, lastNameVal, phoneNumberVal) {
  return {
    id: Date.now(),
    firstName: firstNameVal,
    lastName: lastNameVal,
    phoneNumber: phoneNumberVal,
  };
}

function isHiddenIdHasValue() {
  return hiddenIdElem.value !== "";
}

function addToDoObjToList(toDoObj) {
  todoListData.push(toDoObj);
}

function updateToDoObj(idElem, firstNameVal, lastNameVal, phoneNumberVal) {
  const elementIndex = todoListData.findIndex(
    (element) => element.id === idElem
  );
  todoListData[elementIndex].firstName = firstNameVal;
  todoListData[elementIndex].lastName = lastNameVal;
  todoListData[elementIndex].phoneNumber = phoneNumberVal;
}

function deleteToDoObj(event) {
  const toDoObjId = +event.target.parentNode.parentNode.id;
  todoListData = todoListData.filter((element) => element.id !== toDoObjId);
}

function updateInputFields(event) {
  const toDoObjId = +event.target.parentNode.parentNode.id;
  let element = todoListData.find((element) => element.id === toDoObjId);
  firstNameInpElem.value = element.firstName;
  lastNameInpElem.value = element.lastName;
  phoneNumberInpElem.value = element.phoneNumber;
  hiddenIdElem.value = element.id;
}

function renderToDoList() {
  clearToDoList();
  todoListData.forEach((element) => {
    toDoTableRows.insertAdjacentHTML(
      "beforeend",
      fillTemplateWithData(element)
    );
  });
}

function clearToDoList() {
  toDoTableRows.innerHTML = "";
}

function fillTemplateWithData(toDoObj) {
  return toDoListRowTemplateHtml
    .replaceAll("{{_firstName_}}", toDoObj.firstName)
    .replaceAll("{{_lastName_}}", toDoObj.lastName)
    .replaceAll("{{_phoneNumber_}}", toDoObj.phoneNumber)
    .replaceAll("{{_id_}}", toDoObj.id);
}

function inputsAreValid() {
  resetValidationResults();
  return inpElemList
    .map(validateInput)
    .reduce((isValid, validationResult) => isValid && validationResult);
}

function resetValidationResults() {
  inpElemList.forEach((element) => element.classList.remove("input-invalid"));
}

function validateInput(inputElem) {
  if (inputElem.value === "") {
    inputElem.classList.add("input-invalid");
    return false;
  }
  return true;
}

function resetInputsValues() {
  inpElemList.forEach((element) => (element.value = ""));
  hiddenIdElem.value = "";
}
//#endregion
