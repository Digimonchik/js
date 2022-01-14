const baseUrl = "https://61e1672f63f8fc0017618b99.mockapi.io/api/v1/users";

const loginForm = document.querySelector(".login-form");

const submitBtn = document.querySelector(".submit-button");

function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) =>
      //   alert(response);
      response.text()
    )
    .then((data) => alert(data))
    .then(() => loginForm.reset());
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const userObj = {};
  formData.forEach((value, key) => {
    userObj[key] = value;
  });
  createUser(userObj);
});
loginForm.addEventListener("input", () => {
  if (loginForm.reportValidity()) {
    submitBtn.disabled = false;
  } else submitBtn.disabled = true;
});
