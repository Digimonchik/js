import { onSearchUser } from "./src/onsearchUser.js";
import { renderUserData } from "./src/renderData.js";

const showUserButtonELem = document.querySelector(".name-form__btn");

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};
renderUserData(defaultUser);
showUserButtonELem.addEventListener("click", () => {
  onSearchUser();
});
