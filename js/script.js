"use strict";

//#region data
//#endregion

//#region main
const calc = new Calc(10);
calc.sum(5); /// 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
console.log(calc.resultedValue);
//#endregion

//#region functions
function Calc(initValue) {
  this.resultedValue = initValue;
  this.sum = function (valueToAdd) {
    this.resultedValue += valueToAdd;
  };
  this.mult = function (valueToMultiply) {
    this.resultedValue *= valueToMultiply;
  };
  this.sub = function (valueToSubstract) {
    this.resultedValue -= valueToSubstract;
  };
  this.div = function (valueToDivide) {
    this.resultedValue /= valueToDivide;
  };
}
//#endregion
