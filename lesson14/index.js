// let message = 'Just learn it'
// const sendMessage = (name) => {
//     const sender = 'Your Gromcode';
//     console.log(`${name}, ${message}! ${sender}`)
// }
// const setMessage = (text) => {
//     message = text
// }

// const createMessenger = () => {
//     let message = 'Just learn it'
//     let sender = 'Gromcode';
//     const sendMessage = (name) => {
//         console.log(`${name}, ${message}! Your ${sender}`)
//     };
//     const setMessage = (text) => {
//         message = text
//     }
//     const setSender = (text) => {
//         sender = text
//     }
//     return {
//         sendMessage,
//         setMessage,
//         setSender
//     }
// }
// export default createMessenger

// let result = 0;
// export const add = (num) => { result += num };
// export const decrease = (num) => { result -= num }
// export const reset = () => { result = 0 }
// export const getMemo = () => result

// export const createCalculator = () => {
// let result = 0;
// const add = (num) => { result += num };
// const decrease = (num) => { result -= num }
// const reset = () => { result = 0 }
// const getMemo = () => result;
// return {
//     add,
//     decrease,
//     reset,
//     getMemo
// }
//   }

// const createLogger = () => {
//     let memory = []
//     const warn = (messageText) => {
//         memory.push(
//             {
//                 message: messageText,
//                 type: 'warn',
//                 dateTime: new Date()
                
//             }
//         )
        
//     }
//      const error = (messageText) => {
//         memory.push(
//             {
//                 message: messageText,
//                 type: 'error',
//                 dateTime: new Date()
//             }
//         )
//     }
//      const log = (messageText) => {
//         memory.push(
//             {
//                 message: messageText,
//                 type: 'log',
//                 dateTime: new Date()
//             }
//         )
        
//     }
//     const getRecords = (type) => {
//         let sortedMemory = []
//         if (type == null) {
//             sortedMemory = memory.sort(function (a, b) {
//             a = a.dateTime;
//     b = b.dateTime;
//     return a>b ? -1 : a<b ? 1 : 0;
//         })
//             return sortedMemory
//         }
//         if (memory.length == 0) {
//             return []
//         }
//         sortedMemory = memory.filter(obj => {
//             if (obj.type == type) {
//                 return obj
//             }
//         })
//         if (sortedMemory.length === 0) {
//             sortedMemory.push({})
//         }
//         let newSortedArray = sortedMemory.sort(function (a, b) {
//             a = a.dateTime;
//     b = b.dateTime;
//     return a>b ? -1 : a<b ? 1 : 0;
//         })
//         return newSortedArray
//     } 
// return {
//     warn,
//     error,
//     log,
//     getRecords
// }}

// const createArrayOfFunctions = (num) => {
//     var newArr = [];
//   if (!Number.isInteger(num)) {return null}
//     if (num == null) { return newArr }
//   for (let i =0; i < num; i++) {
//       newArr[i] = function () {
//         return i
//     }
//   } 
//   return newArr
// }
var foo = 1;
var foo = bar();
function bar() {
  if (!foo) {
      foo = 10;
  }
    return foo;
}








