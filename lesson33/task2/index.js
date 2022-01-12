// // function getTasksList() {
// //   return fetch(baseUrl).then((response) => response.json());
// // }

// // function getTaskById(taskId) {
// //   return getTasksList()
// //     .then((result) => result.find((obj) => obj.id == taskId))
// //     .then((result) => {
// //       if (result == undefined) return new Error(`id ${taskId} not found`);
// //       return result;
// //     });
// // }
// const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

// function getTasksList() {
//   return fetch(baseUrl).then((response) => response.json());
// }

// function getTaskById(taskId) {
//   return getTasksList()
//     .then((result) => {
//       let resultObj;
//       result.map((obj) => {
//         if (obj.id === taskId) resultObj = obj;
//       });
//       return resultObj;
//     })
//     .then((result) => {
//       if (result == undefined) return new Error(`id ${taskId} not found`);
//       return result;
//     })
// }

// export function getTasksList() {
//   return fetch(baseUrl).then((response) => response.json());
// }

// export const getTaskById = (taskId) =>
//   fetch(`${baseUrl}/${taskId}`).then((response) => response.json());

// getTasksList().then((tasksList) => {
//   console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
// });

// getTaskById("3").then((taskData) => {
//   console.log(taskData); // {'id':'2', 'done':true ... }
// });
