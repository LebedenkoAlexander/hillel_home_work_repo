"use strict";

//#region data
const UPDATE_BUTTON_CLASS_ID = "data__entry-update-button";
const DELETE_BUTTON_CLASS_ID = "data__entry-delete-button";
const CREATE_BUTTON_CLASS_ID = "contacts-form__create-button";

const contactsFormElem = document.getElementById("contacts-form");
contactsFormElem.addEventListener("click", processRequest);
const contactsFormTemplateElem = document.getElementById(
  "contacts-form-template"
);

const contactsFormInputsElem = document.getElementById("contacts-form__inputs");
contactsFormInputsElem.addEventListener("change", updateButtonsState);

const firstNameInputElem = document.getElementById("inputs__first-name");
const secondNameInputElem = document.getElementById("inputs__second-name");
const numberInputElem = document.getElementById("inputs__number");
const actionInputElem = document.getElementById("inputs__action");

const contactsFormDataElem = document.getElementById("contacts-form__data");
const contactsFormCreateButton = document.getElementById(
  "contacts-form__create-button"
);
//#endregion

//#region main
function processRequest(event) {
  switch (event.target.id) {
    case CREATE_BUTTON_CLASS_ID:
      createEntry();
      restoreDefaultFormValues();
      break;
    case DELETE_BUTTON_CLASS_ID:
      deleteEntry(event);
      break;
    case UPDATE_BUTTON_CLASS_ID:
      updateEntry(event);
      break;
  }
}
//#endregion

//#region functions
function createEntry() {
  contactsFormDataElem.insertAdjacentHTML(
    "beforeend",
    populateWithInputsValues(contactsFormTemplateElem.innerHTML)
  );
}

function updateEntry(event) {
  event.target.parentElement.innerHTML = populateWithInputsValues(
    contactsFormTemplateElem.innerHTML
  );
}

function deleteEntry(event) {
  event.target.parentElement.remove();
}

function populateWithInputsValues(html) {
  return html
    .replaceAll("{{firstName}}", firstNameInputElem.value)
    .replace("{{secondName}}", secondNameInputElem.value)
    .replace("{{number}}", numberInputElem.value)
    .replace("{{action}}", actionInputElem.value);
}

function updateButtonsState() {
  if (isNotEmpty()) {
    enableButtons(getButtonsForValidation());
  } else {
    disableButtons(getButtonsForValidation());
  }
}

function enableButtons(buttonsList) {
  for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].disabled = false;
  }
}

function disableButtons(buttonsList) {
  for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].disabled = true;
  }
}

function getButtonsForValidation() {
  return [contactsFormCreateButton].concat(
    Array.from(
      contactsFormDataElem.getElementsByClassName(UPDATE_BUTTON_CLASS_ID)
    )
  );
}

function restoreDefaultFormValues() {
  firstNameInputElem.value = "";
  secondNameInputElem.value = "";
  numberInputElem.value = "";
  actionInputElem.value = "";
  updateButtonsState();
}

function isNotEmpty() {
  return (
    firstNameInputElem.value !== "" &&
    secondNameInputElem.value !== "" &&
    numberInputElem.value !== "" &&
    actionInputElem.value !== ""
  );
}
//#endregion
