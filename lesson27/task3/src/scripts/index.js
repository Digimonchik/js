import { initToDoHandlers } from "./initHandlers.js";
import { renderTasks } from "./addTask.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initToDoHandlers();
});

const onStorangeChange = (e) => {
  console.log(e.key);
  if (e.key === "tasksList") {
    renderTasks();
  }
};
window.addEventListener("storage", onStorangeChange);
