import { showSpinner } from "./spinner.js";

export const fetchUserData = (userName) =>
  fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Failed to load data");
  });

export const fetchUserRepos = (reposUrl) => {
  return fetch(reposUrl).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Failed to load data");
  });
};
