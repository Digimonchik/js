const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");
const date = document.getElementById("date");
const timeEnd = document.getElementById("time-end");
const timeStart = document.getElementById("time-start");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

form.addEventListener("input", () => {
  if (!form.reportValidity()) {
    console.log("error");
  }
});
const dateObj = {
  dateStart: new Date("2022-01-27 01:13"),
  dateEnd: new Date("2022-01-27 02:14"),
};

timeStart.addEventListener("input", () => {
  const dateInput = date.value;
  const { dateStart, dateEnd } = dateObj;
  console.log(timeStart.value);
  const currentTime = new Date(`${dateInput} ${timeStart.value}`);
  console.log(dateStart.getTime());
  console.log(currentTime.getTime());
  console.log(dateEnd.getTime());
  if (
    dateStart.getTime() < currentTime.getTime() &&
    currentTime < dateEnd.getTime()
  ) {
    console.log("накладывается");
  }
});

// console.log(password);
// password.addEventListener("input", () => {
//   console.log(password.validity.customError);
//   console.log(password.value);
//   if (password.value.length <= 0) {
//     password.setCustomValidity("error");
//   }
//   if (password.value.length > 0) {
//     password.setCustomValidity("");
//   }
// });
// date.addEventListener("input", () => {
//   const inputDay = date.value;
//   console.log(inputDay);
// });

// const timeValidation = () => {
//   const dateInput = date.value;
//   if (
//     new Date(`${dateInput} ${timeEnd.value}`).getTime() <
//     new Date(`${dateInput} ${timeStart.value}`).getTime()
//   ) {
//     console.log("error");
//   }
// };
// timeStart.addEventListener("input", () => {
//   const dateInput = date.value;
//   console.log(new Date(`${dateInput} ${timeStart.value}`).getTime());
// });
// timeEnd.addEventListener("input", () => {
//   timeValidation();
// });
