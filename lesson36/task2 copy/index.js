import { onSearchUser } from "./src/onsearchUser.js";

const userAvatarElem = document.querySelector(".user__avatar");
const showUserButtonELem = document.querySelector(".name-form__btn");

userAvatarElem.src = "https://avatars3.githubusercontent.com/u10001";

showUserButtonELem.addEventListener("click", () => {
  onSearchUser();
});
