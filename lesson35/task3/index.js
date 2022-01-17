const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const repoList = document.querySelector(".repo-list");
const spinner = document.querySelector(".spinner");

const showUserButtonELem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

userAvatarElem.src = "https://avatars3.githubusercontent.com/u10002";
const fetchUserData = (userName) =>
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error("No data");
    })
    .then((data) => {
      spinner.classList.add("spinner_hidden");
      return data;
    })
    .catch((error) => {
      spinner.classList.add("spinner_hidden");
      alert(error.message);
    });

const renderRepos = (reposUrl) => {
  fetch(reposUrl)
    .then((response) => response.json())
    .then((arr) => {
      repoList.innerHTML = "";
      const repos = [];
      arr.forEach((element) => {
        const reposItem = document.createElement("div");
        reposItem.classList.add("repo-list__item");
        reposItem.textContent = element.name;
        repoList.append(reposItem);
      });
    });
};

const renderUserData = (userData) => {
  const { avatar_url, name, location, repos_url } = userData;
  console.log(avatar_url);
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : "";
  renderRepos(repos_url);
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  spinner.classList.remove("spinner_hidden");
  fetchUserData(userName).then((userData) => renderUserData(userData));
};
showUserButtonELem.addEventListener("click", () => {
  onSearchUser();
});
