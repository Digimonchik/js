import { setItem, getItem } from "./common.js";

// export const CreateTask = () => {
//   const taskInput = document.querySelector(".task-input");
//   const newObj = {};
//   if (taskInput.value.length > 0) {
//     newObj.text = taskInput.value;
//     newObj.done = false;

//     setTask(newObj);
//   }
// };
const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.setAttribute("data-id", id);
  checkboxElem.checked = done;
  checkboxElem.classList.add("list__item-checkbox");

  return checkboxElem;
};

export const createListElem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");
  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add("list__item_done");
  }
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};
export const renderTasks = () => {
  const listElem = document.querySelector(".list");
  const tasksList = getItem("taskList") || [];
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(createListElem);
  listElem.append(...tasksElems);
};
export const onCreateTask = () => {
  const taskInput = document.querySelector(".task-input");
  const text = taskInput.value;
  if (!text) {
    return;
  }
  taskInput.value = "";
  const taskList = getItem("taskList") || [];

  const newTaskList = taskList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem("taskList", newTaskList);
  console.log(getItem("taskList"));
  renderTasks();
};

// export const appendElem = () => {
//   const listElem = document.querySelector(".list");
//   const taskInput = document.querySelector(".task-input");
//   if (taskInput.value.length > 0) {
//     const listItemElem = document.createElement("li");
//     listItemElem.classList.add("list__item");
//     const checkbox = document.createElement("input");
//
//     checkbox.classList.add("list__item-checkbox");
//     listItemElem.append(checkbox, taskInput.value);
//     taskInput.value = null;
//     listElem.append(listItemElem);
//   }
// };
