// function findUniq(arr) {
//   const x = arr.filter((elm) => elm === arr[0]);
//   const y = arr.filter((elm) => elm !== arr[0]);

//   return x.length > y.length ? y[0] : x[0];
// }

// findUniq([1, 0, 0]);

const failedRequest = Promise.reject(new Error("failed Error"));

failedRequest
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.warn(err.message);
    return [
      Promise.reject(new Error("second error")),
      Promise.reject(new Error("third error")),
    ];
  })
  .catch((arr) =>
    arr.forEach((err) => {
      console.warn(err.message);
    })
  );
