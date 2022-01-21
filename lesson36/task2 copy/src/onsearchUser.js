import { hideSpinner, showSpinner } from "./spinner.js";
import { fetchUserData, fetchUserRepos } from "./fetchData.js";
import { renderUserData, renderUserRepos } from "./renderData.js";

const userNameInputElem = document.querySelector(".name-form__input");

// export const onSearchUser = () => {
//   showSpinner();
//   const userName = userNameInputElem.value;
//   fetchUserData(userName)
//     .then((userData) => {
//       renderUserData(userData);
//       return userData.repos_url;
//     })
//     .then((data) => {
//       console.log(data);
//       return fetchUserRepos(data);
//     })
//     .then((data) => {
//       renderUserRepos(data);
//     })
//     .catch((err) => {
//       alert(err.message);
//     })
//     .finally(() => {
//       console.log("finally");
//       hideSpinner();
//     });
// };

export const onSearchUser = async () => {
  showSpinner();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchUserRepos(userData.repos_url);
    renderUserRepos(reposList);
  } catch (err) {
    alert(err);
  } finally {
    hideSpinner();
  }
};
