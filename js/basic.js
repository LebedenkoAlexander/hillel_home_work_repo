"use strict";

const digit = requestAndGetADigit(
  "Please enter any digit bigger then 0.\r\n\r\nImportant! You can be requested for the input one more if any issues about the diget you provided."
);
const summOfEvenAndNEvenDigits = getSummOfEvenAndNEvenDigits(digit);
showResults(summOfEvenAndNEvenDigits);

function requestAndGetADigit(title) {
  let requestedDigit;
  do {
    requestedDigit = prompt(title);
  } while (
    requestedDigit === null ||
    requestedDigit.trim() === "" ||
    isNaN(requestedDigit) ||
    requestedDigit <= 0
  );
  return +requestedDigit;
}

function getSummOfEvenAndNEvenDigits(digit) {
  let summNEven = 0;
  let summEven = 0;
  for (let i = 1; i <= digit; i++) {
    if (i % 2) {
      summNEven += i;
    } else {
      summEven += i;
    }
  }
  return [summEven, summNEven];
}

function showResults(resultedArray) {
  alert(`Summ of even digits: ${resultedArray[0]}\r\nSumm of non-even digits: ${resultedArray[1]}`);
}
