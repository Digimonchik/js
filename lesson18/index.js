// let event = {
//     message: 'Welcome to the party!',
//     guests: [
//         { name: 'John', age: 18, email:'example@server.com'}
//     ],
//     getInvitations() {
//         return this.guests.filter(({age}) => age >= 18)
//             .map(({ name, email }) => ({
//                 text: `Dear ${name}! ${this.message}`,
//             email}))
//     }
// }
// // console.log(event.getInvitations())

// const { functionTypeAnnotation } = require("@babel/types");

// const { METHOD_TYPES } = require("@babel/types");

// function sumOfSquares() {
//     return [...arguments].reduce((acc, elem) => {
//         return acc + Math.pow(elem, 2);
//     })
// }
// console.log(sumOfSquares(1,3,4,5,6))


// function defer(func, ms) {
//     return function () {
//         setTimeout(() => func.apply(this, arguments),ms)
//     }
// }
// const user = {
//     name: 'Tom',
//     sayHi() {
//         console.log(`Hi, i'am ${this.name}`)
//     }
// }
//  const deferredHi = defer(user.sayHi, 1000)
// function defer(func) {
//     [].forEach.apply(arguments, (elem) => {
//         myArgs.push(elem)
//     })
// }
// function myFunc(a, b) {
//     return a+b

// function saveCalls(func) {
//   let save.calls
//   return function withMemory(...args) {
//     let myArgs = []
//       myArgs.push(args);
  
  
//     }

function myfunc(a,b) {
  console.log(a/b)
}
function saveCalls(func) {
  const calls = [];
  return function withMemory(...args) {
    withMemory.calls = calls;
    func.apply(this,[...args]);
    calls.push([...args]);
  }
}
const mySpy = saveCalls(myfunc)

const user = {
  name: 'John',
  sayHi() {
    console.log(this.name)
  }
}
const methodWithMemory = saveCalls(user.sayHi)
