const delay = (time) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return p;
};

delay(3000).then(() => {
  console.log("done");
});
delay(5000).then(() => {
  console.log("done");
});
