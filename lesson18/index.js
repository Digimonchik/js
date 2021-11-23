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
let myArgs =[]
// function defer(func) {
//     [].forEach.apply(arguments, (elem) => {
//         myArgs.push(elem)
//     })
// }
// function myFunc(a, b) {
//     return a+b
let myfunc = (a,b) => {
  return a/b
}
let calls = [];
  function spy(func) {
    return function wrapper(...args) {
      calls.push(args);
    }
  }
let b = spy(myfunc)
b(2, 2)
b(2, 4)