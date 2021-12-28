// const taskStorage = [
//   { text: "Buy milk", done: false },
//   { text: "Pick up Tom from airport", done: false },
//   { text: "Visit party", done: false },
//   { text: "Visit doctor", done: true },
//   { text: "Buy meat", done: true },
// ];

// export const setTask = (task) => {
//   taskStorage.push(task);
// };
// export const getStorage = () => taskStorage;

const storage = {};
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getItem = (key) => JSON.parse(localStorage.getItem(key));
