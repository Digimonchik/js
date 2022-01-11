const requestUserData = (userId) => {
  const p = new Promise((resolve, reject) => {
    if (userId == "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(
        () =>
          resolve({
            name: "John",
            age: 17,
            userId: `${userId}`,
            email: `${userId}@example.com`,
          }),
        1000
      );
    }
  });
  p.then((data) => {
    console.log(data);
  });
  p.catch((error) => console.log(error));
  return p;
};

requestUserData("broke");
