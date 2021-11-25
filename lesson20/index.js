/* eslint-disable max-classes-per-file */
// class Order {
//     constructor(price, city, type) {
//         this.price = price,
//             this.city = city,
//             this.type = type,
//             this.ID = Math.random(),
//             this.confirmed = false
//     }

//     checkPrice() {
//         if (this.price > 1000) { return true }
//         return false
//     }
    
//     comfirmOrder() {
//             this.confirmed = true;
//             this.dateConfirmed = new Date();
//         }
    

//     isValidType() {
//         if (this.type != 'Buy' && this.type != 'Sell') {
//             return false
//         }
//         return true
//     }
// }


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi() { 
//         console.log(`Hi, I am ${this.name}`)
//     }
//     requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`)
//     }
    
//     setAge(value) {
//     this.age = value
//     if (this.age >= 25) {
//     console.log(`New photo request was sent for ${this.name}`)
//         }
        
//     if (value < 0) {
//         return false
//         }
        
//     if (this.age > 0) {
//         return this.age
//         }
        
//     }
//     static createEmpty() {
//         return {
//             name: '',
//             age: null
//         }
//     }
// }

// export class Vehicle  {
//     constructor(name, numberOfWeels) {
//         this.name = name;
//         this.numberOfWeels = numberOfWeels;
//     }

//     move() {
//         console.log(`${this.name} is moving`)
//     }

//     stop() {
//         console.log(`${this.name} stopped`)
//     }

// };

// export class Ship extends Vehicle {
//     constructor(name, speed) {
//         super(name, false);
//         this.speed = speed
//     }

//     move() {
//         console.log(`${this.name} lifting anchor up`);
//         super.move()
//     }

//     stop() {
//         super.stop();
//         console.log(`${this.name} lifting anchor down`)
//     }

// }

// class Wallet {
//     constructor() {
//     this._balance = 0}
    
//     getBalance() {
//         return this._balance
//     }
    
//     deposit(amount) {
//         this._balance += amount;
//     }

//     withdraw(amount) {
//         if (this._balance >= amount) {
//          this._balance -=amount
//     }
//     if (this._balance < amount) {
//         console.log(`No enough funds`)
//         }
// }
// }

// class User {
//     constructor(id, name, sessionId) {
//         this.id = id;
//         this.name = name;
//         this.sessionId = sessionId;
//     }
// }

// class UserRepository extends User {
//     constructor(User) {
//         th.users = Object.freeze(User);
//     }

class User {
  constructor(id, name, sessionId) {
    this.id = id,
    this.name = name,
    this.sessionId = sessionId
    this.Users = [].push(this)
  }
}
