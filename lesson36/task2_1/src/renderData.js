import { fetchUserData, fetchUserRepos } from "./fetchData.js";

const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const repoList = document.querySelector(".repo-list");

export const renderUserRepos = (arr) => {
  repoList.innerHTML = "";
  const repos = [];
  arr.forEach((element) => {
    const reposItem = document.createElement("div");
    reposItem.classList.add("repo-list__item");
    reposItem.textContent = element.name;
    repoList.append(reposItem);
  });
};

export const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : "";
};
