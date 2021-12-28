const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

const onCheckBox = (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }
  event.target.checked
    ? event.target.closest(".list__item").classList.add("list__item_done")
    : event.target.closest(".list__item").classList.remove("list__item_done");
};
listElem.addEventListener("click", onCheckBox);

const createButton = document.querySelector(".create-task-btn");

const appendElem = () => {
  const taskInput = document.querySelector(".task-input");
  if (taskInput.value.length > 0) {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("list__item");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("list__item-checkbox");
    listItemElem.append(checkbox, taskInput.value);
    taskInput.value = null;
    tasks.push({ text: `` });
    listElem.append(listItemElem);
  }
};
createButton.addEventListener("click", appendElem);
