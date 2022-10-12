"use strict";

class Accordion {
  #containerEl = null;
  #accordionEl = null;

  constructor(container, numberOfCollItems) {
    this.#containerEl = container;
    this.#buildLayout(numberOfCollItems);
    this.#collapseAll();
    this.#accordionEl.addEventListener("click", this.#processClick);
  }

  #buildLayout(numberOfCollItems) {
    this.#accordionEl = document.createElement("div");
    this.#accordionEl.classList.add("accordion");
    for (let i = 0; i < numberOfCollItems; i++) {
      let accordionItem = document.createElement("div");
      accordionItem.classList.add("accordion__item");

      let accordionItemTitle = document.createElement("div");
      accordionItemTitle.classList.add("item__title");
      accordionItemTitle.innerText = `accordion title ${i + 1}`;

      let accordionItemBody = document.createElement("div");
      accordionItemBody.classList.add("item__body");
      accordionItemBody.innerText = `accordion body ${i + 1}`;

      accordionItem.append(accordionItemTitle, accordionItemBody);
      this.#accordionEl.append(accordionItem);
    }
    this.#containerEl.append(this.#accordionEl);
  }

  #collapseAll() {
    const itemBodyEl = this.#accordionEl.getElementsByClassName("item__body");
    Array.from(itemBodyEl).forEach((element) => {
      element.classList.add("item__body-collapse");
    });
  }

  #processClick(event) {
    if (event.target.classList.contains("item__title")) {
      event.target.parentElement
        .querySelector(".item__body")
        .classList.toggle("item__body-collapse");
    }
  }
}
