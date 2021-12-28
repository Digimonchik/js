import { renderTasks } from "./addTask.js";
import { getItem, setItem } from "./common.js";

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");
  if (!isCheckbox) {
    return;
  }
  const taskList = getItem("tasksList");
  const newTasksList = taskList.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem("tasksList", newTasksList);
  renderTasks();
};
