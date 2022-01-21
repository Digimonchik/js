const fetchUserData = (userName) =>
  fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Failed to load data");
  });

// fetchUserData("facebook").then((data) => {
//   console.log(data.blog);
// });

// const getUserEmails = arr => {
//     const emailsArr = [];
//     arr.forEach(element => {
//         emailsArr.push
//     });
// }

const userArr = ["google", "facebook", "digimonchik"];
// const getEmails = (userArr) =>
//   Promise.all(
//     userArr.map((user) => {
//       return fetchUserData(user);
//     })
//   );

// getEmails(userArr).then((data) =>
//   data.forEach((element) => console.log(element.blog))
// );

const getUserEmails = async (arr) => {
  const response = await Promise.all(
    arr.map((user) => {
      return fetchUserData(user);
    })
  );
  return response.map((element) => element.blog);
};
// getUserEmails(userArr).then((data) => console.log(data));

getUserEmails(userArr).then((data) => console.log(data));
