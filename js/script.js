"use strict";

//#region data
//#endregion

//#region main
const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); //
//#endregion

//#region functions
function createCalculator(startValue) {
  let resultedValue = startValue;
  return {
    sum: (valueToAdd) => (resultedValue += valueToAdd),
    mult: (valueToMultiply) => (resultedValue *= valueToMultiply),
    sub: (valueToSubstract) => (resultedValue -= valueToSubstract),
    div: (valueToDivide) => (resultedValue /= valueToDivide),
    set: (valueToSet) => (resultedValue = valueToSet),
  };
}
//#endregion
