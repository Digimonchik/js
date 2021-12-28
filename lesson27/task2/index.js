const counter = document.querySelector(".counter");
const counterValue = document.querySelector(".counter__value");
// setInterval(() => {
//   counterValue.innerHTML = localStorage.getItem("counterValue");
// }, 600);

const changeValue = (event) => {
  const isButton = event.target.classList.contains("counter__button");
  if (!isButton) {
    return;
  }
  const action = event.target.dataset.action;
  const oldValue = Number(counterValue.textContent);
  const newValue = action === "decrease" ? oldValue - 1 : oldValue + 1;

  localStorage.setItem("counterValue", newValue);
  console.log(localStorage.getItem("counterValue"));

  counterValue.textContent = newValue;
};

counter.addEventListener("click", changeValue);

const onStorageChange = (e) => {
  console.log(e);
  counterValue.textContent = e.newValue;
};

window.addEventListener("storage", onStorageChange);
