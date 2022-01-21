const fetchUser = async (userName) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (response.status === 404) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    return err;
  }
};

fetchUser("facebook")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
