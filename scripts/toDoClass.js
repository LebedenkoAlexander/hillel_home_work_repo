class toDo {
  #toDoListRowTemplateHtml;
  #toDoTableRows;

  constructor() {
    this.#init();
    this.#fetchAndRenderToDoData();
  }

  #init() {
    this.#toDoListRowTemplateHtml = document.getElementById(
      "todo-list__row-template"
    ).innerHTML;
    this.#toDoTableRows = document.getElementById("todo-list__rows");
  }

  #fetchAndRenderToDoData() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((result) => result.json())
      .then((data) => {
        this.#renderToDoList(data);
      });
  }

  #renderToDoList(list) {
    this.#clearToDoList();
    list.forEach((element) => {
      this.#toDoTableRows.insertAdjacentHTML(
        "beforeend",
        this.#fillTemplateWithData(element)
      );
    });
  }

  #clearToDoList() {
    this.#toDoTableRows.innerHTML = "";
  }

  #fillTemplateWithData(toDoObj) {
    return this.#toDoListRowTemplateHtml
      .replaceAll("{{_taskId_}}", toDoObj.id)
      .replaceAll("{{_taskTitle_}}", toDoObj.title)
      .replaceAll("{{_taskStatus_}}", toDoObj.completed ? "Done": "Not done")
      .replaceAll("{{_id_}}", toDoObj.id);
  }
}
