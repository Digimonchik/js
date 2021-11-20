// let user = {
//     firstName: 'John',
//     lastName: "Doe"
// }

// user.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

let callbackPrompt = {
    message: 'put your message here'
}

callbackPrompt.showPromt = function() {
    console.log(prompt(this.message))
}