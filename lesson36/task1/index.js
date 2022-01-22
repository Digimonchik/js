const fetchUser = async (userId) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.status == 404) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    return Promise.reject(new Error("failed to fetch user"));
  }
};

fetchUser("facebook")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetchUser("")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
