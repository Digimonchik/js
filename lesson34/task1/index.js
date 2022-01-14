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
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("сабмит");
  const formData = new FormData(loginForm);
  console.log(formData);
  const userObj = {
    email: formData.get("email"),
    username: formData.get("name"),
    password: formData.get("password"),
  };
  createUser(userObj);
  console.log(userObj);
});
loginForm.addEventListener("change", () => {
  if (loginForm.reportValidity()) {
    submitBtn.disabled = false;
  } else submitBtn.disabled = true;
});

// loginForm.addEventListener("submit", () => {
// });
