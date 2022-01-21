const fetchUserData = (userName) =>
  fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Failed to load data");
  });

const userArr = ["google", "facebook", "digimonchik"];

const getUserEmails = async (arr) => {
  const response = await Promise.all(
    arr.map((user) => {
      return fetchUserData(user);
    })
  );
  return response.map((element) => element.blog);
};

getUserEmails(userArr).then((data) => console.log(data));
