const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");

const showUserButtonELem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const fetchUserData = (userName) =>
  fetch(`https://api.githup.com/users/${userName}`).then((response) => {
    response.json();
  });

const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : "";
};
const onSearchUser = () => {
  const userName = userNameInputElem.value;

  fetchUserData(userName).then((userData) => renderUserData(userData));
};

showUserButtonELem.addEventListener("click", () => {
  console.log("click");
  onSearchUser();
});
