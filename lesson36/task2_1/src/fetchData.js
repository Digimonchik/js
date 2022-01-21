import { showSpinner } from "./spinner.js";

// export const fetchUserData = (userName) =>
//   fetch(`https://api.github.com/users/${userName}`).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     }
//     throw new Error("Failed to load data");
//   });

// export const fetchUserRepos = (reposUrl) => {
//   return fetch(reposUrl).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     }
//     throw new Error("Failed to load data");
//   });
// };

export const fetchUserData = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error("Failed to load data");
};

export const fetchUserRepos = async (reposUrl) => {
  const response = await fetch(reposUrl);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error("Failed to load data");
};
