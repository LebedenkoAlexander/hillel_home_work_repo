"use strict";

//#region data
Hamburger.SIZE_SMALL = {
  price: 50,
  calories: 20,
};

Hamburger.SIZE_MIDDLE = {
  price: 75,
  calories: 30,
};

Hamburger.SIZE_BIG = {
  price: 100,
  calories: 40,
};

Topping.CHEES = {
  price: 10,
  calories: 20,
};

Topping.SALAD = {
  price: 20,
  calories: 5,
};

Topping.POTATO = {
  price: 15,
  calories: 10,
};

Topping.SPICES = {
  price: 15,
  calories: 0,
};

Topping.MAYO = {
  price: 20,
  calories: 5,
};

Topping.KETCHUP = {
  price: 30,
  calories: 500,
};
//#endregion

//#region main
const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Topping.CHEES);
hamburger.addTopping(Topping.SALAD);

console.log("Price: " + hamburger.getPrice());
console.log("Callories: " + hamburger.getCallories());
//#endregion

//#region functions
function Hamburger(humburgerType) {
  this.price = humburgerType.price;
  this.calories = humburgerType.calories;

  this.addTopping = function (toppingType) {
    this.price += toppingType.price;
    this.calories += toppingType.calories;
  };

  this.getPrice = function () {
    return this.price;
  };

  this.getCallories = function () {
    return this.calories;
  };
}

function Topping(toppingType) {
  this.price = toppingType.price;
  this.calories = toppingType.calories;
}
//#endregion
