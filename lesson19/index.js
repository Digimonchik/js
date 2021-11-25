// function getOwnProps(obj) {
//     let newArr = [];
//     for (let prop in obj) {
//         if (obj.hasOwnProperty(prop) && typeof(obj[prop]) != 'function') {
//             newArr.push(prop)
//         }
//     }
//     return newArr
// }

// const vehicle = {
//     name: 'Argo',
//     move() {
//         console.log(`${this.name} is moving`)
//     },
//     stop() {
//         console.log(`${this.name} stopped`)
//     }

// }
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// User.prototype.sayHi = function() {
//     console.log(`Hi, I am ${this.name}`)
// }
// User.prototype.requestNewPhoto = function () {
//     console.log(`New photo request was sent for ${this.name}`)
// }
// User.prototype.setAge = function(value) {
//     this.age = value
//     if (this.age >= 25) {
//         console.log(`New photo request was sent for ${this.name}`)
//     }
//     if (value < 0) {
//         return false
//     }
//     if (this.age > 0) {
//         return this.age
//     }
    
// }

// export default {
//     firstName: 'John',
//     lastName: 'Doe',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName(value) {
//         const [firstName, lastName] = value.split(' ');
//         this.firstName = firstName;
//         this.lastName = lastName;
            
//     }
// }
